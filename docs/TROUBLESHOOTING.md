# Troubleshooting Guide

## Common Issues

### n8n Won't Start

**Error**: Port 5678 already in use

**Solution**: 
```bash
# Find process using port
lsof -i :5678
# Kill it
kill -9 PID
```

### Google Sheets "Permission Denied"

**Cause**: Service account doesn't have access

**Solution**:
1. Check service account email
2. Share Google Sheet with Editor access
3. Verify JSON credential is valid

### WhatsApp Messages Not Sending

**Check**:
- [ ] Template is APPROVED in WhatsApp Manager
- [ ] Template ID matches exactly
- [ ] API credentials are correct
- [ ] Not exceeding rate limits

### No Email Alerts

**Check**:
- [ ] Using Gmail App Password (not regular password)
- [ ] SMTP settings correct
- [ ] Check spam folder
- [ ] Verify email in .env

### Webhook Not Receiving Replies

**Check**:
- [ ] Webhook URL is correct
- [ ] URL is publicly accessible (not localhost)
- [ ] WhatsApp provider webhook is configured
- [ ] Firewall allows incoming connections

## Getting Help

1. Check README files in each directory
2. Review documentation in docs/
3. Search GitHub issues
4. Open new issue with details

## Debug Mode

Set in .env:
```
DEBUG_MODE=true
```

Check n8n execution logs for details.
