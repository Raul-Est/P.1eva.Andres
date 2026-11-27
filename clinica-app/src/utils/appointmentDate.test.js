import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { formatAppointmentDate, getNextHour, isFutureAppointment } from './appointmentDate.js';

test('starts at the next hour in local time', () => {
  assert.equal(getNextHour(new Date(2026, 10, 27, 10, 42)), '2026-11-27T11:00');
  assert.equal(getNextHour(new Date(2026, 10, 27, 10, 0)), '2026-11-27T11:00');
  assert.equal(getNextHour(new Date(2026, 11, 31, 23, 45)), '2027-01-01T00:00');
});

test('formats a local date and hour for the API', () => {
  assert.equal(formatAppointmentDate('2026-11-27T12:00'), '27/11/2026 12:00:00');
  assert.equal(formatAppointmentDate('2027-01-02T00:00'), '02/01/2027 00:00:00');
});

test('rejects dates that are not on the hour', () => {
  assert.equal(formatAppointmentDate('2026-11-27T12:30'), null);
  assert.equal(formatAppointmentDate(''), null);
});

test('only accepts future appointments, including after time has passed', () => {
  assert.equal(isFutureAppointment('2026-11-27T11:00', new Date(2026, 10, 27, 10, 42)), true);
  assert.equal(isFutureAppointment('2026-11-27T11:00', new Date(2026, 10, 27, 11, 0)), false);
  assert.equal(isFutureAppointment('2026-11-27T11:00', new Date(2026, 10, 27, 11, 1)), false);
  assert.equal(isFutureAppointment('invalid', new Date(2026, 10, 27)), false);
});
