/**
 * Phone Number Validator
 * Normalizes to 91XXXXXXXXXX format
 */

function validatePhone(phone) {
  let cleaned = phone.replace(/[^0-9]/g, '');
  
  if (cleaned.length === 10) {
    return '91' + cleaned;
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned;
  }
  
  throw new Error('Invalid phone: ' + phone);
}

// Usage: const normalized = validatePhone($json.phone);
