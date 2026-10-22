import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateInquiryForm,
  JOURNEYS,
  PROMO_SLIDES,
  getSlide,
  getJourneyPath,
  getVRScenePath,
  getProjectPath,
} from './data';

test('validates incomplete inquiry form data correctly', () => {
  const result = validateInquiryForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.serviceType);
  assert.ok(result.errors.message);
});

test('validates email format in inquiry form', () => {
  const result = validateInquiryForm({
    name: 'Tarek Zaki',
    email: 'not-an-email',
    serviceType: 'Event Coverage',
    message: 'We are planning our regional summit.',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
});

test('approves valid inquiry form submission', () => {
  const result = validateInquiryForm({
    name: 'Fatima El-Sherif',
    email: 'fatima@studio.eg',
    serviceType: '360 VR Film Production',
    message: 'Looking for full 8K coverage in Dahab.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('journeys contains all essential Egyptian and regional locations', () => {
  const ids = JOURNEYS.map((j) => j.id);
  assert.ok(ids.includes('siwa'));
  assert.ok(ids.includes('shali'));
  assert.ok(ids.includes('old-cairo'));
  assert.ok(ids.includes('el-moez'));
  assert.ok(ids.includes('dahab'));
  assert.ok(ids.length >= 10);
});

test('getSlide handles wrapping and boundary conditions cleanly', () => {
  const slide0 = getSlide(0);
  const slide1 = getSlide(1);
  const slideWrap = getSlide(PROMO_SLIDES.length);
  const slideNegative = getSlide(-1);

  assert.equal(slide0.slideNumber, PROMO_SLIDES[0].slideNumber);
  assert.equal(slide1.slideNumber, PROMO_SLIDES[1].slideNumber);
  assert.equal(slideWrap.slideNumber, PROMO_SLIDES[0].slideNumber);
  assert.equal(slideNegative.slideNumber, PROMO_SLIDES[PROMO_SLIDES.length - 1].slideNumber);
});

test('route path generators return valid URL paths for each page', () => {
  assert.equal(getJourneyPath('siwa'), '/journeys/siwa');
  assert.equal(getJourneyPath('old-cairo'), '/journeys/old-cairo');
  assert.equal(getVRScenePath('shali'), '/vr/shali');
  assert.equal(getVRScenePath(), '/vr/siwa');
  assert.equal(getProjectPath('siwa'), '/work/siwa-oasis');
  assert.equal(getProjectPath('service'), '/work/service-explained');
  assert.equal(getProjectPath('journeys'), '/journeys');
});
