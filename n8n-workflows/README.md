# n8n Workflows

## ⚠️ IMPORTANT: Get Complete Workflow JSONs

The complete n8n workflow JSON files are too large to include here.

**To get them:**

1. Visit the original conversation/artifacts
2. Find artifacts named:
   - "workflow_daily_sender" 
   - "workflow_reply_handler"
3. Copy complete JSON content
4. Paste into respective files:
   - 1-daily-message-sender.json
   - 2-incoming-reply-handler.json

## Import to n8n

1. Open n8n: http://localhost:5678
2. Click Workflows → Import from File
3. Select JSON file
4. Configure credentials:
   - Google Sheets API
   - WhatsApp API
   - SMTP
5. Update Sheet ID in all Google Sheets nodes
6. Update WhatsApp API endpoint
7. Test and activate!

## Workflow Overview

### 1. Daily Message Sender
- Runs: Daily at 9 AM (cron)
- Reads LEADS_MASTER
- Matches MESSAGE_CALENDAR
- Sends up to 10,000 messages
- Updates logs

### 2. Reply Handler
- Trigger: Webhook
- Receives WhatsApp replies
- Detects intent
- Updates temperature
- Sends email alerts

See [Setup Guide](../docs/SETUP_GUIDE.md) for complete instructions.
