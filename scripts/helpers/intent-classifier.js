/**
 * Intent Classification - Rule-based keyword detection
 * Use in n8n Code nodes
 */

class IntentClassifier {
  constructor() {
    this.intents = {
      Stop: ['stop', 'unsubscribe', 'remove'],
      Price: ['price', 'cost', 'rate', 'kitna'],
      Interested: ['yes', 'interested', 'need'],
      Callback: ['call', 'talk', 'phone'],
      Not_Interested: ['no', 'not interested']
    };
  }
  
  classify(text) {
    text = text.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(this.intents)) {
      if (keywords.some(k => text.includes(k))) {
        return intent;
      }
    }
    
    return 'Other';
  }
}

// Usage in n8n:
// const classifier = new IntentClassifier();
// const intent = classifier.classify($json.replyText);
