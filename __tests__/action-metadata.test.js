const fs = require('fs');
const path = require('path');

test('declares the Node 24 GitHub Actions runtime', () => {
  const actionMetadata = fs.readFileSync(path.join(__dirname, '..', 'action.yml'), 'utf8');

  expect(actionMetadata).toMatch(/^\s+using:\s+"node24"\s*$/m);
});
