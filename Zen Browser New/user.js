// **********************************************************************************
// user.js | Firefox desktop
// https://git.nixnet.services/Narsil/desktop_user.js
// **********************************************************************************
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// START: internal custom pref to test for syntax error
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// STARTUP
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);
// -------------------------------------
// Set startup page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
user_pref("browser.startup.page", 1);
// -------------------------------------
// Set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:home");
// -------------------------------------
// Set NEWTAB page
// true=Activity Stream (default), false=blank page
// user_pref("browser.newtabpage.enabled", false);
// -------------------------------------
// Disable sponsored content on Firefox Home (Activity Stream)
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Shortcuts>Sponsored shortcuts
// -------------------------------------
// Clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "https://www.youtube.com/,https://comick.io/,https://mullvad.net/check/");
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GEOLOCATION
// >>>>>>>>>>>>>>>>>>>>>
//
// Use Mozilla geolocation service instead of Google if permission is granted [FF74+]
user_pref("geo.provider.network.url", "");
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable using the OS's geolocation service
// user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]                                      //CUSTOM-C
user_pref("geo.provider.use_corelocation", false); // [MAC]
// user_pref("geo.provider.use_gpsd", false); // [LINUX] [HIDDEN PREF]                                      //CUSTOM-C
// user_pref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]                                      //CUSTOM-C
// user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]                                      //CUSTOM-C
// -------------------------------------
// Disable region updates
user_pref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
user_pref("browser.region.update.enabled", false); // [FF79+]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUIETER FOX
// >>>>>>>>>>>>>>>>>>>>>
//
// RECOMMENDATIONS
//
// Disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// -------------------------------------
// Disable recommendations in about:addons' Extensions and Themes panes [FF68+]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// -------------------------------------
// Disable personalized Extension Recommendations in about:addons and AMO [FF65+]
user_pref("browser.discovery.enabled", false);
// -------------------------------------
// Disable shopping experience [FF116+]
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]
user_pref("browser.shopping.experience2023.opted", 2);
user_pref("browser.shopping.experience2023.active", false);
//
// TELEMETRY
//
// Disable new data submission [FF41+]
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// -------------------------------------
// Disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// -------------------------------------
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("browser.search.serpEventTelemetry.enabled",false); 
// -------------------------------------
// Skip checking omni.ja and other files
user_pref("corroborator.enabled", false);
// -------------------------------------
// Disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
// -------------------------------------
// Disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
// -------------------------------------
// Disable WebVTT logging and test events
user_pref("media.webvtt.debug.logging", false);
user_pref("media.webvtt.testing.events", false);
// -------------------------------------
// Disable send content blocking log to about:protections
user_pref("browser.contentblocking.database.enabled", false);
// -------------------------------------
// Disable celebrating milestone toast when certain numbers of trackers are blocked
user_pref("browser.contentblocking.cfr-milestone.enabled", false);
// -------------------------------------
// Disable Default Browser Agent
// user_pref("default-browser-agent.enabled", false); // [WINDOWS]                                      //CUSTOM-C
//
// STUDIES
//
// Disable Studies
user_pref("app.shield.optoutstudies.enabled", false);
// -------------------------------------
// Disable Normandy/Shield [FF60+]
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
//
// CRASH REPORTS
//
// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
// -------------------------------------
// Enforce no submission of backlogged Crash Reports [FF58+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
//
// OTHER
//
// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// -------------------------------------
// Disable Network Connectivity checks [FF65+]
user_pref("network.connectivity-service.enabled", false);
// -------------------------------------
// Disable contentblocking reports
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
// -------------------------------------
// Block unwanted connections
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("app.update.staging.enabled", false);
// -------------------------------------
// Remove default handlers and translation engine
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.translation.engine", "");
// -------------------------------------
// Disable connections to Mozilla servers
user_pref("services.settings.server", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SAFE BROWSING (SB)
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable SB (Safe Browsing)
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Disable SB checks for downloads (both local lookups + remote)
user_pref("browser.safebrowsing.downloads.enabled", false);
// -------------------------------------
// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// -------------------------------------
// Disable SB checks for unwanted software
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// -------------------------------------
// Disable "ignore this warning" on SB warnings [FF45+]
// user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Google connections
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google.advisory", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// BLOCK IMPLICIT OUTBOUND
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable link prefetching
user_pref("network.prefetch-next", false);
// -------------------------------------
// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// -------------------------------------
// Disable predictor / prefetching
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
// -------------------------------------
// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);
// -------------------------------------
// Disable mousedown speculative connections on bookmarks and history [FF98+]
user_pref("browser.places.speculativeConnect.enabled", false);
// -------------------------------------
// Enforce no "Hyperlink Auditing" (click tracking)
// user_pref("browser.send_pings", false); // [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DNS / DoH / PROXY / SOCKS
// >>>>>>>>>>>>>>>>>>>>>
//
// Set the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// -------------------------------------
// Disable using UNC (Uniform Naming Convention) paths [FF61+]
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// -------------------------------------
// Disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT: "" FF118+]
// -------------------------------------
// Disable proxy direct failover for system requests [FF91+]
// user_pref("network.proxy.failover_direct", false);
// -------------------------------------
// Disable proxy bypass for system request failures [FF95+]
// user_pref("network.proxy.allow_bypass", false);
// -------------------------------------
// Disable DNS-over-HTTPS (DoH)[FF60+]                                      //CUSTOM-C
user_pref("network.trr.mode", 3);
user_pref("network.trr.confirmationNS", "");
// -------------------------------------
// Disable skipping DoH when parental controls are enabled                                      //CUSTOM-C
user_pref("network.trr.uri", "https://dns.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.mullvad.net/dns-query");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable location bar making speculative connections [FF56+]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// -------------------------------------
// Disable location bar contextual suggestions
user_pref("browser.urlbar.quicksuggest.enabled", false); // [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
// -------------------------------------
// Disable live search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
// -------------------------------------
// Disable urlbar trending search suggestions [FF118+]
user_pref("browser.urlbar.trending.featureGate", false);
// -------------------------------------
// Disable urlbar suggestions
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]
// -------------------------------------
// Disable urlbar clipboard suggestions [FF118+]
user_pref("browser.urlbar.clipboard.featureGate", false);
// -------------------------------------
// Disable recent searches [FF120+]
user_pref("browser.urlbar.recentsearches.featureGate", false);
// -------------------------------------
// Disable search and form history
user_pref("browser.formfill.enable", false);
// -------------------------------------
// Disable tab-to-search [FF85+]
user_pref("browser.urlbar.suggest.engines", false);
// -------------------------------------
// Disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);
// -------------------------------------
// Enable separate default search engine in Private Windows and its UI setting
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]
// -------------------------------------
// Disable merino
user_pref("browser.urlbar.merino.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PASSWORDS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable saving passwords and password alerts.
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
// -------------------------------------
// Set when Firefox should prompt for the primary password
// 0=once per session (default), 1=every time it's needed, 2=after n minutes
user_pref("security.ask_for_password", 2);
// -------------------------------------
// Set how long in minutes Firefox should remember the primary password (0901)
user_pref("security.password_lifetime", 5); // [DEFAULT: 30]
// -------------------------------------
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// -------------------------------------
// Disable formless login capture for Password Manager [FF51+]
user_pref("signon.formlessCapture.enabled", false);
// -------------------------------------
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
// 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
// 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)
user_pref("network.auth.subresource-http-auth-allow", 1);
// -------------------------------------
// Enforce no automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+]
// user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DISK AVOIDANCE
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
// -------------------------------------
// Disable media cache from writing to disk in Private Browsing
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
// -------------------------------------
// Disable storing extra session data
// 0=everywhere, 1=unencrypted sites, 2=nowhere
user_pref("browser.sessionstore.privacy_level", 2);
// -------------------------------------
// Disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]                                      //CUSTOM-C
// user_pref("toolkit.winRegisterApplicationRestart", false);
// -------------------------------------
// Disable favicons in shortcuts [WINDOWS]
user_pref("browser.shell.shortcutFavicons", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
// >>>>>>>>>>>>>>>>>>>>>
//
// Require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);
// -------------------------------------
// Disable TLS1.3 0-RTT (round-trip time) [FF51+]
user_pref("security.tls.enable_0rtt_data", false);
//
// OCSP (Online Certificate Status Protocol)
//
// Enforce OCSP fetching to confirm current validity of certificates
// 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
user_pref("security.OCSP.enabled", 0); // [DEFAULT: 1]
// -------------------------------------
// Set OCSP fetch failures (non-stapled) to hard-fail [SETUP-WEB]
user_pref("security.OCSP.require", false);
//
// CERTS / HPKP (HTTP Public Key Pinning)
//
// Enable strict PKP (Public Key Pinning)
// 0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict
user_pref("security.cert_pinning.enforcement_level", 2);
// -------------------------------------
// Disable CRLite [FF73+]
// 0 = disabled
// 1 = consult CRLite but only collect telemetry (default)
// 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
// 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (default)
user_pref("security.remote_settings.intermediates.enabled", false);
user_pref("security.remote_settings.intermediates.bucket", "");
user_pref("security.remote_settings.intermediates.collection", "");
user_pref("security.remote_settings.intermediates.signer", "");
user_pref("security.remote_settings.crlite_filters.enabled", false);
user_pref("security.remote_settings.crlite_filters.bucket", "");
user_pref("security.remote_settings.crlite_filters.collection", "");
user_pref("security.remote_settings.crlite_filters.signer", "");
user_pref("security.pki.crlite_mode", 0);
//
// MIXED CONTENT
//
// Disable insecure passive content (such as images) on https pages [SETUP-WEB]
// user_pref("security.mixed_content.block_display_content", true); // Defense-in-depth
// -------------------------------------
// Enable HTTPS-Only mode in all windows
user_pref("dom.security.https_only_mode", true); // [FF76+]
// user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
// -------------------------------------
// Enable HTTPS-Only mode for local resources [FF77+]
// user_pref("dom.security.https_only_mode.upgrade_local", true);
// -------------------------------------
// Disable HTTP background requests [FF82+]
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// -------------------------------------
// Disable ping to Mozilla for Man-in-the-Middle detection
user_pref("security.certerrors.mitm.priming.enabled", false);
user_pref("security.certerrors.mitm.priming.endpoint", "");
user_pref("security.pki.mitm_canary_issuer", "");
user_pref("security.pki.mitm_canary_issuer.enabled", false);
user_pref("security.pki.mitm_detected", false);
//
// UI (User Interface)
//
// Display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// -------------------------------------
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// REFERERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Control the amount of cross-origin information to send [FF52+]
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONTAINERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Container Tabs and its UI setting [FF50+]
// user_pref("privacy.userContext.enabled", true);
// user_pref("privacy.userContext.ui.enabled", true);
// -------------------------------------
// Set behavior on "+ Tab" button to display container menu on left click [FF74+]
// user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
// -------------------------------------
// Set external links to open in site-specific containers [FF123+]
// user_pref("browser.link.force_default_user_context_id_for_external_opens", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PLUGINS / MEDIA / WEBRTC
// >>>>>>>>>>>>>>>>>>>>>
//
// Force WebRTC inside the proxy [FF70+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// -------------------------------------
// Force a single network interface for ICE candidates generation [FF42+]
user_pref("media.peerconnection.ice.default_address_only", true);
// -------------------------------------
// Force exclusion of private IPs from ICE candidates [FF51+]
// user_pref("media.peerconnection.ice.no_host", true);
// -------------------------------------
// Disable GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-gmpopenh264.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOM (DOCUMENT OBJECT MODEL)
// >>>>>>>>>>>>>>>>>>>>>
//
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MISCELLANEOUS
// >>>>>>>>>>>>>>>>>>>>>
//
// Remove temp files opened from non-PB windows with an external application
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
// -------------------------------------
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// -------------------------------------
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// -------------------------------------
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", ""); // Defense-in-depth
// -------------------------------------
// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
// -------------------------------------
// Disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0 (default) or 1=allow, 2=block
// user_pref("permissions.default.shortcuts", 2);
// -------------------------------------
// Remove special permissions for certain mozilla domains [FF35+]
user_pref("permissions.manager.defaultsUrl", "");
// -------------------------------------
// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// -------------------------------------
// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// -------------------------------------
// Enforce PDFJS, disable PDFJS scripting
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
// -------------------------------------
// Disable middle click on new tab button opening URLs or searches using clipboard [FF115+]
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]
// -------------------------------------
// Disable content analysis by DLP (Data Loss Prevention) agents
// 0=Block all requests, 1=Warn on all requests (which lets the user decide), 2=Allow all requests
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]
// -------------------------------------
// Disable the default checkedness for "Save card and address to Firefox" checkboxes
user_pref("dom.payments.defaults.saveAddress", false);
user_pref("dom.payments.defaults.saveCreditCard", false);
// -------------------------------------
// Disable Displaying Javascript in History URLs
user_pref("browser.urlbar.filter.javascript", true);
//
// DOWNLOADS
//
// Enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// -------------------------------------
// Disable downloads panel opening on every download [FF96+]
user_pref("browser.download.alwaysOpenPanel", false);
// -------------------------------------
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// -------------------------------------
// Enable user interaction for security by always asking how to handle new mimetypes [FF101+]
user_pref("browser.download.always_ask_before_handling_new_types", true);
//
// EXTENSIONS
//
// Limit allowed extension directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
// user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// -------------------------------------
// Disable bypassing 3rd party extension install prompts [FF82+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// -------------------------------------
// Disable webextension restrictions on certain mozilla domains [FF60+]
// user_pref("extensions.webextensions.restrictedDomains", "");
// -------------------------------------
// Disable extensions suggestions
user_pref("extensions.webservice.discoverURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ETP (ENHANCED TRACKING PROTECTION)
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable ETP Strict Mode [FF86+]                                      //CUSTOM-C
// user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]
// -------------------------------------
// Disable ETP web compat features [FF93+]
// user_pref("privacy.antitracking.enableWebcompat", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SHUTDOWN & SANITIZING
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Firefox to clear items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//
// SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS | v2 migration is FF128+
//
// Set/enforce what items to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown_v2.cache", true); // [FF128+] [DEFAULT: true]
user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // [FF128+] [DEFAULT: true]
// user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
// user_pref("privacy.clearOnShutdown_v2.siteSettings", false); // [FF128+] [DEFAULT: false]
// -------------------------------------
// Set Session Restore to clear on shutdown [FF34+]
// user_pref("privacy.clearOnShutdown.openWindows", true);
//
// SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS FF103+ | v2 migration is FF128+
//
// Set "Cookies" and "Site Data" to clear on shutdown
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
user_pref("privacy.clearOnShutdown.sessions", true);  // Active Logins [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // Cookies, Site Data, Active Logins [FF128+]
//
// SANITIZE SITE DATA: IGNORES "ALLOW" SITE EXCEPTIONS
//
// Set manual "Clear Data" items [FF128+]
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false until it respects "allow" site exceptions
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
// user_pref("privacy.clearSiteData.siteSettings", false);
//
// SANITIZE HISTORY: IGNORES "ALLOW" SITE EXCEPTIONS | clearHistory migration is FF128+
//
// Set manual "Clear History" items, also via Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true); // [DEFAULT: true]
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.history", true); // Browsing & Download History
// user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", true); // [DEFAULT: false]
user_pref("privacy.clearHistory.cookiesAndStorage", false);
// user_pref("privacy.cpd.openWindows", false); // Session Restore
// user_pref("privacy.cpd.passwords", false);
// user_pref("privacy.cpd.siteSettings", false);
// user_pref("privacy.clearHistory.siteSettings", false);
// -------------------------------------
//
// SANITIZE MANUAL: TIMERANGE
//
// set "Time range to clear" for "Clear Data" and "Clear History"
// 0=everything, 1=last hour, 2=last two hours, 3=last four hours, 4=today
user_pref("privacy.sanitize.timeSpan", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// FPP (fingerprintingProtection)
// >>>>>>>>>>>>>>>>>>>>>
// Enable FPP in PB mode [FF114+]
// user_pref("privacy.fingerprintingProtection.pbmode", true); // [DEFAULT: true FF118+]
// -------------------------------------
// Set global FPP overrides [FF114+]
// user_pref("privacy.fingerprintingProtection.overrides", "");
// -------------------------------------
// Set granular FPP overrides
// user_pref("privacy.fingerprintingProtection.granularOverrides", "");
// -------------------------------------
// Disable remote FPP overrides [FF127+]
// user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL RFP (resistFingerprinting)
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable RFP
user_pref("privacy.resistFingerprinting", true); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]                                      //CUSTOM-C
// -------------------------------------
// Set RFP new window size max rounded values [FF55+]
user_pref("privacy.window.maxInnerWidth", 1400);
user_pref("privacy.window.maxInnerHeight", 900);
// -------------------------------------
// Disable mozAddonManager Web API [FF57+]
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
// -------------------------------------
// Enable letterboxing [FF67+]
// user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
// -------------------------------------
// Disable RFP by domain [FF91+]
// user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
// -------------------------------------
// Enable RFP spoof english prompt [FF59+]
// 0=prompt, 1=disabled, 2=enabled
user_pref("privacy.spoof_english", 2);
// -------------------------------------
// Disable using system colors
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
// -------------------------------------
// Enforce links targeting new windows to open in a new tab instead
// 1=most recent window or tab, 2=new window, 3=new tab
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
// -------------------------------------
// Set all open window methods to abide by "browser.link.open_newwindow"
user_pref("browser.link.open_newwindow.restriction", 0);
// -------------------------------------
// Disable WebGL (Web Graphics Library)
user_pref("webgl.disabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL OPSEC
// >>>>>>>>>>>>>>>>>>>>>
//
// Start Firefox in PB (Private Browsing) mode
// user_pref("browser.privatebrowsing.autostart", true);
// -------------------------------------
// Disable memory cache
// capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes
// user_pref("browser.cache.memory.enable", false);
// user_pref("browser.cache.memory.capacity", 0);
// -------------------------------------
// Disable saving passwords                                      //CUSTOM-C
 user_pref("signon.rememberSignons", false);
// -------------------------------------
// Disable permissions manager from writing to disk [FF41+] [RESTART]
// user_pref("permissions.memory_only", true); // [HIDDEN PREF]
// -------------------------------------
// Disable intermediate certificate caching [FF41+] [RESTART]
// user_pref("security.nocertdb", true); //
// -------------------------------------
// Disable favicons in history and bookmarks                                      //CUSTOM-C
// user_pref("browser.chrome.site_icons", false);
// -------------------------------------
// Exclude "Undo Closed Tabs" in Session Restore
// user_pref("browser.sessionstore.max_tabs_undo", 0);
// -------------------------------------
// Disable resuming session from crash
// user_pref("browser.sessionstore.resume_from_crash", false);
// -------------------------------------
// Disable "open with" in download dialog [FF50+]
// user_pref("browser.download.forbid_open_with", true);
// -------------------------------------
// Disable location bar suggestion types
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
user_pref("browser.urlbar.suggest.weather", false);
// -------------------------------------
// Disable location bar dropdown
// user_pref("browser.urlbar.maxRichResults", 0);
// -------------------------------------
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
// -------------------------------------
// Disable browsing and download history
user_pref("places.history.enabled", false);
// -------------------------------------
// Disable Windows jumplist [WINDOWS]
// user_pref("browser.taskbar.lists.enabled", false);
// user_pref("browser.taskbar.lists.frequent.enabled", false);
// user_pref("browser.taskbar.lists.recent.enabled", false);
// user_pref("browser.taskbar.lists.tasks.enabled", false);
// -------------------------------------
// Discourage downloading to desktop
// 0=desktop, 1=downloads (default), 2=custom
// user_pref("browser.download.folderList", 2);
// -------------------------------------
// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
// -------------------------------------
// Limit events that can cause a pop-up
// user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// -------------------------------------
// Disable page thumbnail collection
// user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable Windows native notifications and use app notications instead [FF111+] [WINDOWS]
// user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
// -------------------------------------
// Disable location bar using search                                      //CUSTOM-C
// user_pref("keyword.enabled", false);
// -------------------------------------
// Force GPU sandboxing (Linux, default on Windows)
user_pref("security.sandbox.gpu.level", 1);
// -------------------------------------
// Enable Site Isolation
user_pref("fission.autostart", true);
user_pref("gfx.webrender.all", true);
// -------------------------------------
// Disable Relay email feature
user_pref("signon.firefoxRelay.feature", "disabled");
// -------------------------------------
// Disable Privacy-Preserving Attribution
user_pref("dom.private-attribution.submission.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL HARDENING
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable MathML (Mathematical Markup Language) [FF51+]
user_pref("mathml.disabled", true);
// -------------------------------------
// Disable in-content SVG (Scalable Vector Graphics) [FF53+]
// user_pref("svg.disabled", true);
// -------------------------------------
// Disable graphite
user_pref("gfx.font_rendering.graphite.enabled", false);
// -------------------------------------
// Disable asm.js [FF22+]
user_pref("javascript.options.asmjs", false);
// -------------------------------------
// Disable Ion and baseline JIT to harden against JS exploits [RESTART]
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
// -------------------------------------
// Disable WebAssembly [FF52+]
user_pref("javascript.options.wasm", false);
// -------------------------------------
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// -------------------------------------
// Disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.enabled", false);
// -------------------------------------
// Disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
// -------------------------------------
// Disable IPv6 if using a VPN                                      //CUSTOM-C
user_pref("network.dns.disableIPv6", true);
// -------------------------------------
// Control when to send a cross-origin referer
// * 0=always (default), 1=only if base domains match, 2=only if hosts match
user_pref("network.http.referer.XOriginPolicy", 1);
// -------------------------------------
// Set DoH bootstrap address [FF89+]
// user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T TOUCH
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable Firefox blocklist
user_pref("extensions.blocklist.enabled", false); // [DEFAULT: true]
user_pref("extensions.blocklist.addonItemURL", "");	
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.addons.signer", "");
user_pref("services.blocklist.plugins.collection", "");	
user_pref("services.blocklist.plugins.signer", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.gfx.signer", "");
// -------------------------------------
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", true); // [DEFAULT: false]
// -------------------------------------
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
// -------------------------------------
// Enforce no First Party Isolation [FF51+]
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
// -------------------------------------
// Enforce SmartBlock shims (about:compat) [FF81+]
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]
// -------------------------------------
// Enforce no TLS 1.0/1.1 downgrades
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
// -------------------------------------
// Enforce disabling of Web Compatibility Reporter [FF56+]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
// -------------------------------------
// Disable Quarantined Domains [FF115+]
user_pref("extensions.quarantinedDomains.enabled", false); // [DEFAULT: true]
// -------------------------------------
// prefsCleaner: previously active items removed from arkenfox 115-127
// user_pref("accessibility.force_disabled", "");
// user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", "");
// user_pref("network.protocol-handler.external.ms-windows-store", "");
// user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", "");
// user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", "");
// user_pref("privacy.partition.serviceWorkers", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable APIs
user_pref("geo.enabled", false);
// user_pref("full-screen-api.enabled", false);
// -------------------------------------
// Set default permissions
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2); // Virtual Reality
// -------------------------------------
// Disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// -------------------------------------
// Disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);
// -------------------------------------
// Disable non-modern cipher suites
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
// user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
// -------------------------------------
// Control TLS versions
// user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
// user_pref("security.tls.version.max", 4);
// -------------------------------------
// Disable SSL session IDs [FF36+]
// user_pref("security.ssl.disable_session_identifiers", true);
// -------------------------------------
// Onions
// user_pref("dom.securecontext.allowlist_onions", true);
// user_pref("network.http.referer.hideOnionSource", true);
// -------------------------------------
// Referers
// user_pref("network.http.sendRefererHeader", 2);
// user_pref("network.http.referer.trimmingPolicy", 0);
// -------------------------------------
// Set the default Referrer Policy [FF59+]
// 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
// user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
// user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
// -------------------------------------
// Disable HTTP Alternative Services [FF37+]
// user_pref("network.http.altsvc.enabled", false);
// -------------------------------------
// Disable website control over browser right-click context menu
// user_pref("dom.event.contextmenu.enabled", false);
// -------------------------------------
// Disable icon fonts (glyphs) and local fallback rendering
// user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
// user_pref("gfx.downloadable_fonts.fallback_delay", -1);
// -------------------------------------
// Disable Clipboard API
// user_pref("dom.event.clipboardevents.enabled", false);
// -------------------------------------
// Disable System Add-on updates
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// -------------------------------------
// Enable the DNT (Do Not Track) HTTP header
user_pref("privacy.donottrackheader.enabled", false);
// -------------------------------------
// Customize ETP settings
// user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5]
// user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
// user_pref("privacy.partition.network_state.ocsp_cache", true); // [DEFAULT: true FF123+]
// user_pref("privacy.query_stripping.enabled", true); // [FF101+]
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
// user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
// user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
// user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
// -------------------------------------
// Allow embedded tweets and Reddit posts. Don't do it!
// user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com"); // [HIDDEN PREF]
// user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // [HIDDEN PREF]
// -------------------------------------
// Disable service workers
// user_pref("dom.serviceWorkers.enabled", false);
// -------------------------------------
// Disable Web Notifications [FF22+]
// user_pref("dom.webnotifications.enabled", false);
// -------------------------------------
// Disable Push Notifications [FF44+]
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// -------------------------------------
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
// -------------------------------------
// Enable GPC (Global Privacy Control) in non-PB windows
// user_pref("privacy.globalprivacycontrol.enabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER: FINGERPRINTING
// >>>>>>>>>>>>>>>>>>>>>
//
// prefsCleaner: reset items useless for anti-fingerprinting
// user_pref("browser.zoom.siteSpecific", false);
// user_pref("dom.enable_performance", false);
// user_pref("dom.enable_resource_timing", false);
// user_pref("dom.maxHardwareConcurrency", 2);
// user_pref("font.system.whitelist", ""); // [HIDDEN PREF]
// user_pref("general.appname.override", ""); // [HIDDEN PREF]
// user_pref("general.appversion.override", ""); // [HIDDEN PREF]
// user_pref("general.buildID.override", "20181001000000"); // [HIDDEN PREF]
// user_pref("general.oscpu.override", ""); // [HIDDEN PREF]
// user_pref("general.platform.override", ""); // [HIDDEN PREF]
// user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; rv:115.0) Gecko/20100101 Firefox/115.0"); // [HIDDEN PREF]
// user_pref("media.ondevicechange.enabled", false);
// user_pref("media.video_stats.enabled", false);
// user_pref("webgl.enable-debug-renderer-info", false);
user_pref("ui.use_standins_for_native_colors", true);
// user_pref("browser.display.use_document_fonts", 0);
user_pref("device.sensors.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
// -------------------------------------
// Disable API for measuring text width and height.
user_pref("dom.textMetrics.actualBoundingBox.enabled", false);
user_pref("dom.textMetrics.baselines.enabled", false);
user_pref("dom.textMetrics.emHeight.enabled", false);
user_pref("dom.textMetrics.fontBoundingBox.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NON-PROJECT RELATED
// >>>>>>>>>>>>>>>>>>>>>
//
// WELCOME & WHAT'S NEW NOTICES
//
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
//
// WARNINGS
//
user_pref("browser.tabs.warnOnClose", false); // [DEFAULT: false FF94+]
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuitShortcut", false); // [FF94+]
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.warnOnQuit", false);
//
// UPDATES
//
// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]                                      //CUSTOM-C
// user_pref("app.update.auto", false);
// -------------------------------------
// Disable auto-CHECKING for extension and theme updates                                      //CUSTOM-C
// user_pref("extensions.update.enabled", false);
// -------------------------------------
// Disable auto-INSTALLING extension and theme updates
user_pref("extensions.update.autoUpdateDefault", false);
// -------------------------------------
// Disable extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
// -------------------------------------
// Disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);
//
// CONTENT BEHAVIOR
//
user_pref("accessibility.typeaheadfind", false); // enable "Find As You Type"
user_pref("clipboard.autocopy", false); // disable autocopy default [LINUX]
user_pref("layout.spellcheckDefault", 0); // 0=none, 1-multi-line, 2=multi-line & single-line
//
// FIREFOX HOME CONTENT
//
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);                                      //CUSTOM-C
// user_pref("browser.newtabpage.activity-stream.showSearch", false);                                      //CUSTOM-C
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//
// UX FEATURES
//
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", false); // Reader View
user_pref("browser.tabs.firefox-view", false); // Firefox-view
//
// OTHER
//
// user_pref("browser.bookmarks.max_backups", 2);
user_pref("security.tls.enable_kyber", true);
user_pref("network.http.http3.enable_kyber", true);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.sessionstore.interval", 30000); // minimum interval between session save operations
user_pref("network.manage-offline-status", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.disableResetPrompt", true); // [HIDDEN PREF]
// user_pref("xpinstall.signatures.required", false); // enforced extension signing (Nightly/ESR)
//
// MORE
//
// user_pref("security.insecure_connection_icon.enabled", ""); // [DEFAULT: true FF70+]
// user_pref("security.mixed_content.block_active_content", ""); // [DEFAULT: true since at least FF60]
user_pref("security.ssl.enable_ocsp_stapling", false); // [DEFAULT: true FF26+]
// user_pref("webgl.disable-fail-if-major-performance-caveat", ""); // [DEFAULT: true FF86+]
user_pref("webgl.enable-webgl2", false);
// user_pref("webgl.min_capability_mode", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DEPRECATED / RENAMED
// >>>>>>>>>>>>>>>>>>>>>
//
// ESR115.x still uses all the following prefs
//
// FF116
//
// Set RFP's font visibility level [FF94+]
// user_pref("layout.css.font-visibility.resistFingerprinting", 1); // [DEFAULT: 1]
//
// FF117
//
// Disable Windows Microsoft Family Safety cert [FF50+] [WINDOWS]                                      //CUSTOM-C
// user_pref("security.family_safety.mode", 0);
// -------------------------------------
// Disable service worker Web Notifications [FF44+]
// user_pref("dom.webnotifications.serviceworker.enabled", false);
//
// FF118
//
// Limit font visibility (Windows, Mac, some Linux) [FF94+]
// user_pref("layout.css.font-visibility.private", 1);
// user_pref("layout.css.font-visibility.standard", 1);
// user_pref("layout.css.font-visibility.trackingprotection", 1);
// -------------------------------------
// Disable permissions delegation [FF73+]
// user_pref("permissions.delegation.enabled", false);
//
// FF119
//
// Use en-US locale regardless of the system or region locale
// user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
// -------------------------------------
// Disable skipping DoH when parental controls are enabled [FF70+]
user_pref("network.dns.skipTRR-when-parental-control-enabled", false)
//
// FF123
//
// Disable PingCentre telemetry (used in several System Add-ons) [FF57+]
user_pref("browser.ping-centre.telemetry", false);
//
// FF126
//
// Disable What's New toolbar icon [FF69+]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
//
// FF127
//
// Disable content analysis by DLP (Data Loss Prevention) agents - replaced by default_result
user_pref("browser.contentanalysis.default_allow", false);
// -------------------------------------
// Enforce non-native widget theme
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
//

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PERSONAL PREFERENCES
// >>>>>>>>>>>>>>>>>>>>>

// Firefox don't close the window when you close the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// userChrome & userContent support
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fix Scrolling
user_pref("general.smoothScroll.currentVelocityWeighting", 0);
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
// user_pref("general.smoothScroll.stopDecelerationWeighting", 0.82);
user_pref("mousewheel.min_line_scroll_amount", 25);

// Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");

// Firefox Labs
user_pref("browser.preferences.experimental", true);

// END
