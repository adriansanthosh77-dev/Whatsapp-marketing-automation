# WhatsApp Marketing Automation System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n](https://img.shields.io/badge/n8n-latest-orange)](https://n8n.io)

A complete, production-ready WhatsApp marketing automation system using n8n and Google Sheets.

## 🚀 Features

- ✅ 10,000 messages/day limit with automatic enforcement
- ✅ Smart lead segmentation (5 segments)
- ✅ Temperature-based messaging (HOT/WARM/COLD)
- ✅ Rule-based intent detection (no AI required)
- ✅ Automated 30-day follow-up sequences
- ✅ Email alerts for hot leads
- ✅ Complete audit logging
- ✅ 100% free tools

## 📋 Quick Start

1. **Setup Google Sheets**
   - Import CSV templates from `google-sheets/sheet-templates/`
   - Setup Google Sheets API credentials
   - See [Setup Guide](docs/SETUP_GUIDE.md)

2. **Install n8n**
   ```bash
   npm install n8n -g
   n8n start
   ```

3. **Import Workflows**
   - Open n8n at http://localhost:5678
   - Import JSON files from `n8n-workflows/`
   - Configure credentials

4. **Configure Environment**
   ```bash
   cp config/.env.example .env
   # Edit .env with your credentials
   ```

5. **Start Automation!**

## 📖 Documentation

- [Complete Setup Guide](docs/SETUP_GUIDE.md)
- [Template Creation Guide](docs/TEMPLATE_GUIDE.md)
- [API Configuration](docs/API_CONFIGURATION.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

## 🏗️ Architecture

```
Google Sheets (Database)
    ↓
n8n Workflows
    ↓
WhatsApp API + SMTP Email
```

## 📊 What's Included

- 2 complete n8n workflows (JSON)
- 4 Google Sheets templates (CSV)
- 30+ WhatsApp message templates
- 10+ JavaScript helper utilities
- Docker & Railway deployment configs
- Complete documentation (10,000+ words)

## 🛠️ Technology Stack

- **Automation**: n8n (open-source)
- **Database**: Google Sheets API
- **Messaging**: WhatsApp Business API
- **Email**: SMTP (Gmail)

## 📝 License

MIT License - See LICENSE file

## 🙏 Acknowledgments

Built with ❤️ for open-source marketing automation

- [n8n](https://n8n.io)
- [Google Sheets API](https://developers.google.com/sheets)

Star ⭐ this repo if it helped you!
