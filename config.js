module.exports = {
  platform: 'github',
  // autodiscover finds all repos your token can see
  autodiscover: true, 
  autodiscoverFilter: 'Zachalot/*', 
  // 'onboarding: false' allows the bot to run without opening a "Welcome" PR in every repo
  onboarding: false,
  requireConfig: 'optional',
  // Recommended starting point
  extends: ['config:best-practices'],
};
