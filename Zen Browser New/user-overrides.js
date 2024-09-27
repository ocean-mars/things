// user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]                                      //CUSTOM-C

// user_pref("geo.provider.use_gpsd", false); // [LINUX] [HIDDEN PREF]                                      //CUSTOM-C

// user_pref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]                                      //CUSTOM-C

// user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]                                      //CUSTOM-C

// user_pref("default-browser-agent.enabled", false); // [WINDOWS]                                      //CUSTOM-C

// Disable DNS-over-HTTPS (DoH)[FF60+]                                      //CUSTOM-C
user_pref("network.trr.mode", 3);
user_pref("network.trr.confirmationNS", "");

// Disable skipping DoH when parental controls are enabled                                      //CUSTOM-C
user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.mullvad.net/dns-query");

// Disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]                                      //CUSTOM-C
// user_pref("toolkit.winRegisterApplicationRestart", false);

// Enable ETP Strict Mode [FF86+]                                      //CUSTOM-C
// user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]

// Disable saving passwords                                      //CUSTOM-C
// user_pref("signon.rememberSignons", false);

// Disable favicons in history and bookmarks                                      //CUSTOM-C
// user_pref("browser.chrome.site_icons", false);

// Disable location bar using search                                      //CUSTOM-C
// user_pref("keyword.enabled", false);

// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]                                      //CUSTOM-C
// user_pref("app.update.auto", false);

// Disable auto-CHECKING for extension and theme updates                                      //CUSTOM-C
// user_pref("extensions.update.enabled", false);

// Disable auto-INSTALLING extension and theme updates                                      //CUSTOM-C
user_pref("extensions.update.autoUpdateDefault", true);

// user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);                                      //CUSTOM-C

// user_pref("browser.newtabpage.activity-stream.showSearch", false);                                      //CUSTOM-C

// Disable Windows Microsoft Family Safety cert [FF50+] [WINDOWS]                                      //CUSTOM-C
// user_pref("security.family_safety.mode", 0);
