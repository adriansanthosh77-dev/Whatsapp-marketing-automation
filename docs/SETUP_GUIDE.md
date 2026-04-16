# Complete Setup Guide

## Prerequisites

- Node.js 16+
- Google Account
- WhatsApp Business API
- Gmail account

## Step 1: Google Sheets Setup

1. Create new Google Sheet
2. Import CSV templates from `google-sheets/sheet-templates/`
3. Setup Google Sheets API:
   - Go to console.cloud.google.com
   - Create project
   - Enable Google Sheets API
   - Create service account
   - Download JSON key
   - Share sheet with service account email

## Step 2: Install n8n

```bash
npm install n8n -g
n8n start
```

Access at http://localhost:5678

## Step 3: Import Workflows

1. In n8n, go to Workflows → Import
2. Import files from `n8n-workflows/`
3. Configure credentials

## Step 4: Configure Environment

```bash
cp config/.env.example .env
```

Edit .env with your credentials.

## Step 5: Test & Deploy

- Send test messages
- Verify webhook works
- Check email alerts
- Deploy!

For detailed instructions, see the README files in each directory.
