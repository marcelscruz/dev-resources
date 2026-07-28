# Gracestack — Free AI API

Free AI API with no credit card required. Powered by DeepSeek V4 Pro on A100 GPUs.

- **URL**: https://tools.gracestack.se/api.html
- **What it offers**: 
  - Free tier: 50 calls/day (no credit card)
  - Pioneer tier: 100 calls/day
  - OpenAI-compatible API
  - DeepSeek V4 Pro model on Azure A100 GPUs
- **Pricing**: Free tier available, Power Pack from 10 SEK
- **API Key**: Instant registration at https://tools.gracestack.se/api.html

## Quick Start
```bash
curl -X POST https://tools.gracestack.se/api/chat \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_KEY" \
  -d '{"messages":[{"role":"user","content":"Hello!"}]}'
```
