# WhatsApp Template Creation Guide

## Step 1: Create Templates in WhatsApp Manager

1. Go to Meta Business Suite or your API provider
2. Create new template
3. Use {{1}} for variables (customer name)
4. Submit for approval

## Step 2: Get Template ID

After approval (24-48 hours), copy the template ID.

## Step 3: Add to MESSAGE_CALENDAR

In Google Sheets, add row with:
- Segment
- Temperature  
- Day Number
- Template ID ← paste here
- Description
- Cooldown Days

## Example Templates

See `whatsapp-templates/` directory for ready-to-use examples.

## Tips

- Keep under 1024 characters
- Use clear call-to-action
- Include opt-out option
- Professional tone
