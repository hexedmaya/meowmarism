// UI translation: exact-match dictionary (English source text -> translation) applied to the DOM.
(() => {
  const LANGS = { en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español' };
  const FLAGS = {
    en: '<rect width="24" height="16" fill="#012169"/><path d="M0 0L24 16M24 0L0 16" stroke="#fff" stroke-width="3"/><path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.2"/><path d="M12 0V16M0 8H24" stroke="#fff" stroke-width="5"/><path d="M12 0V16M0 8H24" stroke="#C8102E" stroke-width="3"/>',
    de: '<rect width="24" height="5.4" fill="#000"/><rect y="5.3" width="24" height="5.4" fill="#DD0000"/><rect y="10.6" width="24" height="5.4" fill="#FFCE00"/>',
    fr: '<rect width="8" height="16" fill="#0055A4"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#EF4135"/>',
    es: '<rect width="24" height="16" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/>',
  };
  const DICT = {
    de: {
      // shell, navigation, accounts
      'Server': 'Server', 'Servers': 'Server', 'Manage users': 'Nutzer verwalten', 'Update': 'Update', 'Settings': 'Einstellungen',
      'GitHub': 'GitHub', 'Official version': 'Offizielle Version', 'License': 'Lizenz', 'Log out': 'Abmelden', 'Log in': 'Anmelden',
      'Language': 'Sprache', 'All instances': 'Alle Instanzen', 'Add user': 'Nutzer hinzufügen', 'Create instance': 'Instanz erstellen',
      'Instances': 'Instanzen', 'Instances on this host - each one is its own process with its own console, stats and backups.': 'Instanzen auf diesem Host - jede ist ein eigener Prozess mit eigener Konsole, Statistik und eigenen Backups.',
      'Name': 'Name', 'Minecraft': 'Minecraft', 'Loader': 'Loader', 'Port': 'Port', 'Usage': 'Auslastung', 'Autostart': 'Autostart',
      'Open': 'Öffnen', 'Start': 'Starten', 'Stop': 'Stoppen', 'Restart': 'Neustart', 'Remove': 'Entfernen', 'Cancel': 'Abbrechen', 'Save': 'Speichern',
      'Edit': 'Bearbeiten', 'Close': 'Schließen', 'Delete': 'Löschen', 'Download': 'Herunterladen', 'Upload': 'Hochladen', 'Refresh': 'Aktualisieren',
      'Back': 'Zurück', 'Next': 'Weiter', 'Add': 'Hinzufügen', 'Clear': 'Leeren', 'Send': 'Senden', 'Pause': 'Pause', 'Resume': 'Fortsetzen',
      'Password': 'Passwort', 'Username': 'Benutzername', 'Repeat password': 'Passwort wiederholen', 'Remember me': 'Angemeldet bleiben',
      'meowmarism LITE - login': 'meowmarism LITE - Anmeldung', 'wrong username or password': 'Benutzername oder Passwort falsch',
      'No instances yet - create one with the + button above.': 'Noch keine Instanzen - erstelle eine mit dem + oben.',
      'panel not started': 'Panel nicht gestartet', 'starting': 'startet', 'running': 'läuft', 'stopped': 'gestoppt', 'error': 'Fehler',
      'Who can log in, and exactly what each account may do.': 'Wer sich anmelden darf und was jedes Konto genau tun darf.',
      'Access': 'Zugriff', 'Panel-wide behavior.': 'Verhalten des gesamten Panels.',
      'Require all servers to be stopped before updating': 'Vor einem Update müssen alle Server gestoppt sein',
      'Saved.': 'Gespeichert.', 'Could not save.': 'Konnte nicht gespeichert werden.',
      // update page
      'Installed version': 'Installierte Version', 'Latest release': 'Neueste Version', 'Released': 'Veröffentlicht', 'Status': 'Status',
      'update available': 'Update verfügbar', 'up to date': 'aktuell', 'Updating': 'Aktualisieren', 'Update now': 'Jetzt aktualisieren',
      'Update now?': 'Jetzt aktualisieren?', 'View release on GitHub': 'Release auf GitHub ansehen',
      "What's currently installed on this host, and what's newest on GitHub.": 'Was auf diesem Host installiert ist und was auf GitHub am neuesten ist.',
      'Updating stops running servers briefly, installs the newest release, and starts the ones that were running again.': 'Beim Update werden laufende Server kurz gestoppt, die neueste Version wird installiert und die zuvor laufenden Server starten wieder.',
      'Running servers are stopped briefly, the new release is installed, and the servers that were running start again on their own. The panel is unreachable for a few seconds.': 'Laufende Server werden kurz gestoppt, die neue Version wird installiert und die zuvor laufenden Server starten von selbst wieder. Das Panel ist einige Sekunden nicht erreichbar.',
      'Downloading and installing...': 'Wird heruntergeladen und installiert...', 'Restarting...': 'Startet neu...',
      'This is taking too long. Reload the page or check the host.': 'Das dauert zu lange. Lade die Seite neu oder prüfe den Host.',
      'Could not start the update.': 'Das Update konnte nicht gestartet werden.', 'Update available →': 'Update verfügbar →', 'Update available →': 'Update verfügbar →',
      'Leave this panel?': 'Panel verlassen?', 'Visit': 'Besuchen', 'Confirm': 'Bestätigen',
      'Remove this instance?': 'Diese Instanz entfernen?', 'It disappears from this list, but files on disk are kept.': 'Sie verschwindet aus dieser Liste, die Dateien auf der Festplatte bleiben erhalten.',
      'Remove this user?': 'Diesen Nutzer entfernen?', 'Not removed': 'Nicht entfernt',
      // user modal
      'Preset': 'Vorlage', 'Viewer': 'Betrachter', 'Operator': 'Operator', 'Manager': 'Manager', 'Administrator': 'Administrator', 'Owner': 'Besitzer', 'Custom': 'Benutzerdefiniert',
      'No access': 'Kein Zugriff', 'Default access to every instance': 'Standardzugriff auf jede Instanz', 'Per-instance overrides': 'Überschreibungen pro Instanz',
      'Create instances': 'Instanzen erstellen', 'Update the panel': 'Panel aktualisieren', 'Console & players': 'Konsole & Spieler', 'Start / stop': 'Starten / Stoppen',
      'Remove instance': 'Instanz entfernen', 'View': 'Ansehen', 'Files': 'Dateien', 'Mods': 'Mods', 'Backups': 'Backups', 'Use default': 'Standard verwenden',
      'Username': 'Benutzername', 'Access': 'Zugriff',
      // wizard
      'Name it and pick what it runs.': 'Benenne sie und wähle, was darauf läuft.', 'Instance name': 'Instanzname', 'Minecraft version': 'Minecraft-Version',
      'Loader version': 'Loader-Version', 'Pick a Minecraft version first': 'Wähle zuerst eine Minecraft-Version', 'Vanilla': 'Vanilla', 'Fabric': 'Fabric', 'Forge': 'Forge', 'NeoForge': 'NeoForge',
      'Creating instance…': 'Instanz wird erstellt…', 'Downloading and installing the server software - this can take a few minutes.': 'Serversoftware wird heruntergeladen und installiert - das kann ein paar Minuten dauern.',
      'Installed and registered - start it whenever you want.': 'Installiert und registriert - starte sie, wann du willst.',
      // worker: nav / titles
      'Overview': 'Übersicht', 'Performance': 'Leistung', 'Players': 'Spieler', 'Console': 'Konsole', 'Automation': 'Automatisierung', 'Events & Audit': 'Ereignisse & Audit', 'System': 'System',
      'Overview · Server Panel': 'Übersicht · Server Panel', 'Performance · Server Panel': 'Leistung · Server Panel', 'Players · Server Panel': 'Spieler · Server Panel', 'Console · Server Panel': 'Konsole · Server Panel',
      'Settings · Server Panel': 'Einstellungen · Server Panel', 'Mods · Server Panel': 'Mods · Server Panel', 'Files · Server Panel': 'Dateien · Server Panel', 'Access · Server Panel': 'Zugriff · Server Panel',
      'Backups · Server Panel': 'Backups · Server Panel', 'Automation · Server Panel': 'Automatisierung · Server Panel', 'Events & Audit · Server Panel': 'Ereignisse & Audit · Server Panel', 'System · Server Panel': 'System · Server Panel',
      'live server status': 'Live-Serverstatus', 'CPU, memory, disk and network history': 'CPU-, Speicher-, Festplatten- und Netzwerkverlauf', 'click a player to manage them': 'Klicke auf einen Spieler, um ihn zu verwalten',
      'live server output and commands': 'Live-Serverausgabe und Befehle', 'Minecraft server configuration': 'Minecraft-Serverkonfiguration', 'enable or disable installed mods': 'Installierte Mods aktivieren oder deaktivieren',
      'browse files on the server': 'Dateien auf dem Server durchsuchen', 'whitelist, operators and bans': 'Whitelist, Operatoren und Sperren', 'world backups, manual and automatic': 'Welt-Backups, manuell und automatisch',
      'Scheduled restarts, backups, sleep mode and crash handling': 'Geplante Neustarts, Backups, Ruhemodus und Absturzbehandlung', 'timeline, health, lifecycle and panel actions': 'Zeitverlauf, Zustand, Lebenszyklus und Panel-Aktionen',
      'host and process details': 'Host- und Prozessdetails',
      // worker: status
      'Live': 'Live', 'live': 'live', 'live connected': 'live verbunden', 'connecting': 'verbindet', 'disconnected': 'getrennt', 'Offline': 'Offline', 'offline': 'offline', 'online': 'online', 'Online now': 'Jetzt online',
      'Server is not running': 'Server läuft nicht', 'Server state': 'Serverstatus', 'Server status': 'Serverstatus', 'Server health': 'Serverzustand', 'Server uptime': 'Server-Laufzeit', 'Uptime': 'Laufzeit',
      'Server process': 'Serverprozess', 'Server engine': 'Server-Engine', 'Server limit': 'Serverlimit', 'Server command': 'Serverbefehl', 'Server port': 'Serverport', 'Server list status': 'Serverlisten-Status',
      'normal': 'normal', 'high': 'hoch', 'elevated': 'erhöht', 'none': 'keine', 'not started': 'nicht gestartet', 'not detected': 'nicht erkannt', 'not reported': 'nicht gemeldet', 'available': 'verfügbar',
      'currently online': 'derzeit online', 'no warnings': 'keine Warnungen', 'empty': 'leer', 'enabled': 'aktiviert', 'Enabled': 'Aktiviert', 'Disabled': 'Deaktiviert', 'On': 'An', 'Off': 'Aus', 'off': 'aus',
      'Loading...': 'Lädt...', 'Loading history…': 'Verlauf wird geladen…', '--- waiting for console output ---': '--- warte auf Konsolenausgabe ---', 'Empty folder.': 'Leerer Ordner.',
      'No players online.': 'Keine Spieler online.', 'No backups yet.': 'Noch keine Backups.', 'No events yet.': 'Noch keine Ereignisse.', 'No panel actions yet.': 'Noch keine Panel-Aktionen.', 'No backup has run yet': 'Es lief noch kein Backup', 'None.': 'Keine.',
      // worker: console
      'Filter console': 'Konsole filtern', 'Autoscroll': 'Automatisch scrollen', 'Console paused': 'Konsole pausiert', 'Clear view': 'Ansicht leeren', 'Download log': 'Log herunterladen', 'Command palette': 'Befehlspalette',
      'Command suggestions': 'Befehlsvorschläge', 'Commands': 'Befehle', 'Go to page, find player, run action…': 'Gehe zu Seite, Spieler suchen, Aktion ausführen…', 'Console buffer': 'Konsolenpuffer', 'Console lines cached': 'Zwischengespeicherte Konsolenzeilen',
      'Regex': 'Regex', 'Enter': 'Eingabe', 'Esc': 'Esc', 'Tab': 'Tab', 'select ·': 'auswählen ·', 'send ·': 'senden ·',
      // worker: players
      'Player': 'Spieler', 'Player name': 'Spielername', 'Reason': 'Grund', 'Reason (optional)': 'Grund (optional)', 'Kick': 'Kicken', 'Ban': 'Sperren', 'Kill': 'Töten', 'Heal': 'Heilen', 'Clear effects': 'Effekte entfernen',
      'OP': 'OP', 'DeOP': 'DeOP', 'Operators': 'Operatoren', 'Operator': 'Operator', 'Whitelist': 'Whitelist', 'Whitelist +': 'Whitelist +', 'Whitelist −': 'Whitelist −', 'Bans': 'Sperren', 'Moderation': 'Moderation',
      'Close player panel': 'Spielerpanel schließen', 'Gamemode': 'Spielmodus', 'Survival': 'Überleben', 'Creative': 'Kreativ', 'Adventure': 'Abenteuer', 'Spectator': 'Zuschauer', 'survival': 'Überleben', 'creative': 'Kreativ', 'adventure': 'Abenteuer', 'spectator': 'Zuschauer',
      'First seen': 'Zuerst gesehen', 'Last seen': 'Zuletzt gesehen', 'Joined': 'Beigetreten', 'Joins': 'Beitritte', 'Session': 'Sitzung', 'Peak session': 'Längste Spitze', 'Total play': 'Gesamtspielzeit', 'Longest session*': 'Längste Sitzung*', 'Avg session*': 'Ø Sitzung*', 'Unique today*': 'Einzigartig heute*',
      '*Since this panel process started; no fake historical data after a panel restart.': '*Seit Start dieses Panel-Prozesses; keine erfundenen Verlaufsdaten nach einem Panel-Neustart.',
      'Player count history': 'Spieleranzahl im Verlauf', 'Hide online players': 'Online-Spieler verbergen', 'Hide player list from server status responses.': 'Spielerliste in Serverstatus-Antworten verbergen.',
      // worker: settings (server.properties)
      'Save changes': 'Änderungen speichern', 'Reset changes': 'Änderungen zurücksetzen', 'Pending changes': 'Ausstehende Änderungen', 'Restart required.': 'Neustart erforderlich.', 'Changes only take effect after a server restart.': 'Änderungen werden erst nach einem Server-Neustart wirksam.',
      "Changes require a running server (they're sent as console commands).": 'Änderungen erfordern einen laufenden Server (sie werden als Konsolenbefehle gesendet).',
      'Identity': 'Identität', 'Gameplay': 'Spielmechanik', 'Advanced': 'Erweitert', 'Network': 'Netzwerk', 'World': 'Welt', 'Resources': 'Ressourcen', 'Security': 'Sicherheit',
      'MOTD': 'MOTD', 'Text shown in the multiplayer server list.': 'Text in der Multiplayer-Serverliste.', 'Max players': 'Max. Spieler', 'Maximum simultaneous players.': 'Maximale gleichzeitige Spieler.',
      'Difficulty': 'Schwierigkeit', 'World difficulty. Applies live.': 'Weltschwierigkeit. Wirkt sofort.', 'peaceful': 'friedlich', 'easy': 'einfach', 'hard': 'schwer',
      'Default gamemode': 'Standard-Spielmodus', 'Default mode for new / reconnecting players.': 'Standardmodus für neue bzw. wiederverbindende Spieler.', 'Hardcore': 'Hardcore', 'Hardcore world rules. Requires restart.': 'Hardcore-Weltregeln. Erfordert Neustart.',
      'PvP': 'PvP', 'Allow players to damage each other.': 'Spielern erlauben, sich gegenseitig Schaden zuzufügen.', 'Allow flight': 'Fliegen erlauben', 'Prevents the server from kicking players for flying.': 'Verhindert, dass der Server Spieler fürs Fliegen kickt.',
      'Allow Nether': 'Nether erlauben', 'Enable Nether dimension access.': 'Zugang zur Nether-Dimension aktivieren.', 'Command blocks': 'Befehlsblöcke', 'Enable command block execution.': 'Ausführung von Befehlsblöcken aktivieren.',
      'Spawn animals': 'Tiere spawnen', 'Natural animal spawning.': 'Natürliches Spawnen von Tieren.', 'Spawn monsters': 'Monster spawnen', 'Natural hostile mob spawning.': 'Natürliches Spawnen feindlicher Mobs.',
      'Spawn NPCs': 'NPCs spawnen', 'Allow villagers and similar NPCs.': 'Dorfbewohner und ähnliche NPCs erlauben.', 'Generate structures': 'Strukturen generieren', 'Generate villages, strongholds and other structures in new chunks.': 'Dörfer, Festungen und andere Strukturen in neuen Chunks generieren.',
      'Spawn protection': 'Spawn-Schutz', 'Protected radius around world spawn. 0 disables it.': 'Geschützter Radius um den Weltspawn. 0 deaktiviert ihn.', 'View distance': 'Sichtweite', 'How far chunks are sent to clients.': 'Wie weit Chunks an Clients gesendet werden.',
      'Simulation distance': 'Simulationsdistanz', 'Radius in which entities and blocks tick.': 'Radius, in dem Entitäten und Blöcke ticken.', 'Online mode': 'Online-Modus', 'Verify player accounts with Mojang/Microsoft. Disabling this allows unverified names.': 'Spielerkonten bei Mojang/Microsoft prüfen. Deaktivieren erlaubt ungeprüfte Namen.',
      'Enforce whitelist': 'Whitelist erzwingen', 'Kick non-whitelisted players when whitelist is active.': 'Spieler ohne Whitelist-Eintrag kicken, wenn die Whitelist aktiv ist.', 'Allow only whitelisted players. Applies live.': 'Nur Spieler auf der Whitelist zulassen. Wirkt sofort.',
      'Enforce secure profile': 'Sicheres Profil erzwingen', 'Require signed player profiles when supported by this server version.': 'Signierte Spielerprofile verlangen, wenn diese Serverversion es unterstützt.',
      'Prevent proxy connections': 'Proxy-Verbindungen verhindern', 'Vanilla proxy-connection protection.': 'Vanilla-Schutz vor Proxy-Verbindungen.', 'Resource pack URL': 'Ressourcenpaket-URL', 'Optional server resource-pack URL.': 'Optionale Ressourcenpaket-URL des Servers.',
      'Require resource pack': 'Ressourcenpaket verlangen', 'Require players to accept the configured resource pack.': 'Spieler müssen das konfigurierte Ressourcenpaket akzeptieren.',
      'Compression threshold': 'Kompressionsschwelle', '-1 disables packet compression.': '-1 deaktiviert die Paketkompression.', 'Rate limit': 'Ratenlimit', 'Packet rate limit. 0 disables it.': 'Paket-Ratenlimit. 0 deaktiviert es.',
      'Idle timeout': 'Inaktivitäts-Timeout', 'Kick idle players after this many minutes. 0 disables it.': 'Inaktive Spieler nach so vielen Minuten kicken. 0 deaktiviert es.', 'Game server listen port. Changing it requires clients to use the new port.': 'Listen-Port des Spielservers. Bei Änderung müssen Clients den neuen Port verwenden.',
      'Answer server-list status requests.': 'Serverlisten-Statusanfragen beantworten.', 'Console output to OPs': 'Konsolenausgabe an OPs', 'Send console command output to online operators.': 'Ausgabe von Konsolenbefehlen an Operatoren online senden.',
      'OP permission level': 'OP-Berechtigungsstufe', 'Default permission level granted to operators.': 'Standard-Berechtigungsstufe für Operatoren.', 'Function permission level': 'Funktions-Berechtigungsstufe', 'Permission level used by datapack functions.': 'Berechtigungsstufe für Datapack-Funktionen.',
      'Max world size': 'Max. Weltgröße', 'Maximum world border coordinate the server allows.': 'Maximale Weltgrenzen-Koordinate, die der Server erlaubt.', 'Max chained neighbor updates': 'Max. verkettete Nachbar-Updates', 'Limit for chained block neighbor updates. -1 disables the limit.': 'Limit für verkettete Block-Nachbar-Updates. -1 deaktiviert das Limit.',
      'Entity broadcast range': 'Entitäten-Sendereichweite', 'Multiplier for entity tracking range.': 'Multiplikator für die Entitäten-Verfolgungsreichweite.', 'Watchdog max tick': 'Watchdog max. Tick', 'Watchdog limit for a single tick. -1 disables the watchdog timeout.': 'Watchdog-Limit für einen einzelnen Tick. -1 deaktiviert das Watchdog-Timeout.',
      'Synchronous chunk writes': 'Synchrone Chunk-Schreibvorgänge', 'Vanilla chunk write behavior. Requires restart.': 'Vanilla-Chunk-Schreibverhalten. Erfordert Neustart.', 'Use optimized native networking when available.': 'Optimierte native Netzwerkfunktionen verwenden, wenn verfügbar.',
      'Handed to the JVM as -Xmx. Leave headroom for the OS and other instances on this host.': 'Wird der JVM als -Xmx übergeben. Lass Reserve für das Betriebssystem und andere Instanzen auf diesem Host.', 'How much of this machine the instance may use.': 'Wie viel dieser Maschine die Instanz nutzen darf.',
      'Memory (MB)': 'Speicher (MB)', 'Filter this folder...': 'Diesen Ordner filtern...', 'Filter mods...': 'Mods filtern...', 'Installed mods': 'Installierte Mods', 'Plugins: none detected': 'Plugins: keine erkannt',
      // worker: backups / automation
      'Backup now': 'Jetzt sichern', 'Backup settings': 'Backup-Einstellungen', 'World backups': 'Welt-Backups', 'Keep at most': 'Höchstens behalten', 'Every': 'Alle', 'Every (hours)': 'Alle (Stunden)', 'After': 'Nach', 'Full': 'Voll',
      'Automatic world backups for this instance.': 'Automatische Welt-Backups für diese Instanz.', 'How often backups run automatically and how many are kept.': 'Wie oft Backups automatisch laufen und wie viele behalten werden.',
      'Automatic backup on the configured interval · oldest backups beyond the configured limit are deleted automatically. A backup also runs automatically right before every scheduled restart. Manual backups can be taken any time, even while the server is running.': 'Automatisches Backup im eingestellten Intervall · die ältesten Backups über dem Limit werden automatisch gelöscht. Direkt vor jedem geplanten Neustart läuft ebenfalls ein Backup. Manuelle Backups sind jederzeit möglich, auch bei laufendem Server.',
      'Crash auto-restart': 'Automatischer Neustart nach Absturz', 'Automatically restarts the server after an unexpected crash. Gives up after too many crashes in a row so a broken mod doesn\'t loop forever.': 'Startet den Server nach einem unerwarteten Absturz automatisch neu. Gibt nach zu vielen Abstürzen in Folge auf, damit eine defekte Mod nicht endlos loopt.',
      'Sleep mode': 'Ruhemodus', "Automatically stops the server when nobody's online, and wakes it back up as soon as someone tries to join (the server stays visible in the multiplayer list while asleep).": 'Stoppt den Server automatisch, wenn niemand online ist, und startet ihn wieder, sobald jemand beitreten will (der Server bleibt im Ruhezustand in der Multiplayer-Liste sichtbar).',
      'Daily auto-restart': 'Täglicher Auto-Neustart', 'Restarts the server once a day at the chosen time (with an in-chat warning countdown and an automatic backup beforehand).': 'Startet den Server einmal täglich zur gewählten Zeit neu (mit Warn-Countdown im Chat und vorherigem automatischem Backup).',
      'Schedule restart': 'Neustart planen', 'Restart server': 'Server neustarten', 'Force stop': 'Erzwungen stoppen', 'warn players before restart': 'Spieler vor Neustart warnen', 'warn players in chat': 'Spieler im Chat warnen', 'Warn': 'Warnen', 'Delay': 'Verzögerung', 'Wait': 'Warten',
      'minutes with no players': 'Minuten ohne Spieler', 'Restart requests': 'Neustart-Anfragen', 'Restarts': 'Neustarts', 'Last crash': 'Letzter Absturz', 'Last exit': 'Letztes Beenden', 'Last server exit': 'Letztes Server-Ende', 'crashes/hour': 'Abstürze/Stunde',
      // worker: access, events, system, perf
      'Audit log': 'Audit-Log', 'Event timeline': 'Ereignisverlauf', 'Lifecycle': 'Lebenszyklus', 'Lag warnings': 'Lag-Warnungen', 'Lag spikes · 10m': 'Lag-Spitzen · 10 Min', 'Lag · 10m': 'Lag · 10 Min', 'Minecraft lag': 'Minecraft-Lag',
      'Lag/crash/restart markers are drawn on the timeline.': 'Lag-, Absturz- und Neustart-Markierungen werden im Zeitverlauf angezeigt.', 'joins, leaves, lifecycle, lag, settings and crashes': 'Beitritte, Austritte, Lebenszyklus, Lag, Einstellungen und Abstürze', 'panel actions and configuration changes': 'Panel-Aktionen und Konfigurationsänderungen',
      'Diagnostics': 'Diagnose', 'Runtime': 'Laufzeit', 'Runtime health': 'Laufzeitzustand', 'Host': 'Host', 'Hostname': 'Hostname', 'Operating system': 'Betriebssystem', 'Architecture': 'Architektur', 'Linux host': 'Linux-Host', 'Instance': 'Instanz', 'Process': 'Prozess', 'Threads': 'Threads',
      'Open handles': 'Offene Handles', 'Open file handles': 'Offene Datei-Handles', 'Java runtime / GC': 'Java-Laufzeit / GC', 'Java GC telemetry': 'Java-GC-Telemetrie', 'Recent GC load': 'Aktuelle GC-Last', 'Total GC time': 'Gesamte GC-Zeit', 'Young GC': 'Young GC', 'Full GC': 'Full GC', 'Heap': 'Heap', 'Metaspace': 'Metaspace',
      'Memory': 'Speicher', 'Disk': 'Festplatte', 'Disk free': 'Festplatte frei', 'Disk read': 'Festplatte lesen', 'Disk write': 'Festplatte schreiben', 'Network throughput': 'Netzwerkdurchsatz', 'Receive': 'Empfangen', 'Transmit': 'Senden', 'Total received': 'Gesamt empfangen', 'Total sent': 'Gesamt gesendet',
      'CPU cores': 'CPU-Kerne', 'Logical cores': 'Logische Kerne', 'Load 1 / 5 / 15m': 'Last 1 / 5 / 15 Min', 'Context switches': 'Kontextwechsel', 'Performance history': 'Leistungsverlauf', 'Live telemetry': 'Live-Telemetrie', 'Live browsers': 'Verbundene Browser',
      'Graph range': 'Diagrammbereich', 'History points': 'Verlaufspunkte', 'History': 'Verlauf', 'Viewing history · Back to live': 'Verlauf wird angezeigt · Zurück zu Live', 'Drag to zoom · double click for live · hover is synchronized across charts': 'Ziehen zum Zoomen · Doppelklick für Live · Hover ist über alle Diagramme synchronisiert',
      'Minecraft tick telemetry': 'Minecraft-Tick-Telemetrie', 'passive checks · no fake TPS': 'passive Prüfungen · keine erfundenen TPS', 'facts, not a score': 'Fakten, keine Bewertung', 'only values actually reported by the server': 'nur Werte, die der Server tatsächlich meldet',
      'Sample interval': 'Sample-Intervall', 'Raw sample interval': 'Rohdaten-Intervall', 'Raw samples cached': 'Zwischengespeicherte Rohdaten', 'Raw sequence': 'Roh-Sequenz', 'Latest raw sequence': 'Letzte Roh-Sequenz', 'Samples in last batch': 'Samples im letzten Batch', 'Last batch': 'Letzter Batch', 'Publish interval': 'Veröffentlichungsintervall',
      'raw retained · server EMA · client smoothing': 'Rohdaten behalten · Server-EMA · Client-Glättung', 'Recovery cache': 'Wiederherstellungs-Cache', 'Initial snapshot': 'Erster Snapshot', 'Stream state': 'Stream-Status', 'Playback queue': 'Wiedergabe-Warteschlange', 'Render queue': 'Render-Warteschlange', 'Display delay': 'Anzeigeverzögerung',
      'Clock offset': 'Uhrzeit-Versatz', 'Startup': 'Start', 'Startup time': 'Startzeit', 'Ready at': 'Bereit um', 'waiting for Java process': 'warte auf Java-Prozess', 'Detected features': 'Erkannte Funktionen', 'Engine': 'Engine', 'Loaded chunks': 'Geladene Chunks', 'Entities': 'Entitäten', 'Simulation': 'Simulation',
      'Native transport': 'Nativer Transport', 'Launcher PID': 'Launcher-PID', 'Java PID': 'Java-PID', 'Created': 'Erstellt', 'Modified': 'Geändert', 'Size': 'Größe', 'File': 'Datei', 'Version': 'Version', 'State': 'Zustand', 'Feed': 'Feed', 'Show': 'Anzeigen', 'Hide': 'Ausblenden',
      'Open instance': 'Instanz öffnen', 'Chat': 'Chat', 'Lag': 'Lag', 'Max': 'Max', 'Total': 'Gesamt', 'Reason:': 'Grund:',
      // toasts and misc
      'Added': 'Hinzugefügt', 'All': 'Alle', 'Error': 'Fehler', 'Suggestions': 'Vorschläge', 'Minecraft port': 'Minecraft-Port',
      'How many console lines are kept in memory / the live view (more = more panel RAM usage).': 'Wie viele Konsolenzeilen im Speicher / in der Live-Ansicht gehalten werden (mehr = mehr RAM-Verbrauch des Panels).',
      'Host CPU · 50 ms raw samples': 'Host-CPU · 50-ms-Rohdaten', 'Java CPU · 50 ms raw samples': 'Java-CPU · 50-ms-Rohdaten', 'System RAM · 50 ms raw samples': 'System-RAM · 50-ms-Rohdaten',
      'Server settings saved': 'Servereinstellungen gespeichert', 'Unsaved changes reset': 'Nicht gespeicherte Änderungen zurückgesetzt', 'Server restart requested': 'Server-Neustart angefordert',
      'Player is no longer online': 'Spieler ist nicht mehr online', 'Restart scheduled': 'Neustart geplant', 'Restart cancelled': 'Neustart abgebrochen', 'Force stop sent': 'Erzwungenes Stoppen gesendet',
      'Upload failed': 'Upload fehlgeschlagen', 'Auto-restart settings saved': 'Auto-Neustart-Einstellungen gespeichert', 'Backup settings saved': 'Backup-Einstellungen gespeichert',
      'Console buffer setting saved': 'Konsolenpuffer-Einstellung gespeichert', 'Sleep mode settings saved': 'Ruhemodus-Einstellungen gespeichert', 'Crash auto-restart settings saved': 'Absturz-Neustart-Einstellungen gespeichert',
      'This is sent to the server right away.': 'Das wird sofort an den Server gesendet.', 'Force stop?': 'Erzwungen stoppen?',
      'Force stop the Minecraft process? Unsaved world data can be lost.': 'Minecraft-Prozess erzwungen stoppen? Nicht gespeicherte Weltdaten können verloren gehen.',
      'Delete backup?': 'Backup löschen?', 'Restore this backup?': 'Dieses Backup wiederherstellen?', 'Restore': 'Wiederherstellen', 'Delete folder?': 'Ordner löschen?', 'Delete file?': 'Datei löschen?',
      'Replace the current world with "{name}"? The server will be stopped for this. The current world is safety-backed-up first.': 'Aktuelle Welt durch "{name}" ersetzen? Der Server wird dafür gestoppt. Die aktuelle Welt wird vorher als Sicherung gespeichert.',
      'This deletes everything inside it.': 'Dabei wird alles darin gelöscht.', 'Action failed': 'Aktion fehlgeschlagen', 'OK': 'OK',
      'Looking up the latest release': 'Suche die neueste Version', 'Downloading': 'Lade herunter', 'Checking the download': 'Prüfe den Download', 'Stopping servers': 'Stoppe Server', 'Installing': 'Installiere', 'Restarting': 'Starte neu',
      'Stop the server?': 'Server stoppen?', 'Restart the server?': 'Server neu starten?', 'Stop this server?': 'Diesen Server stoppen?', 'Restart this server?': 'Diesen Server neu starten?',
      'Players will be disconnected and the world is saved.': 'Spieler werden getrennt und die Welt wird gespeichert.', 'Players will be disconnected while it restarts.': 'Spieler werden während des Neustarts getrennt.',
      'Language': 'Sprache',
      'Startup': 'Start', 'How the Minecraft server is launched. Changes apply the next time the server starts.': 'Wie der Minecraft-Server gestartet wird. Änderungen gelten beim nächsten Start des Servers.',
      'Start automatically when meowmarism starts': 'Automatisch starten, wenn meowmarism startet', 'Min memory': 'Min. Speicher', 'Max memory': 'Max. Speicher', 'JVM flags': 'JVM-Flags', 'Standard': 'Standard',
      "Aikar's flags (optimized G1GC)": 'Aikars Flags (optimierter G1GC)', 'Extra JVM arguments': 'Zusätzliche JVM-Argumente', 'Java binary (optional)': 'Java-Programm (optional)', 'CPU limit': 'CPU-Limit', 'Hard RAM limit': 'Hartes RAM-Limit',
      'cores (0 = none)': 'Kerne (0 = keins)', 'MB (0 = none)': 'MB (0 = keins)', 'Startup settings saved': 'Starteinstellungen gespeichert', 'Could not save': 'Konnte nicht gespeichert werden',
      'Limits are enforced with systemd cgroups.': 'Limits werden über systemd-cgroups durchgesetzt.',
      'CPU limits are enforced by pinning to cores; the RAM limit is not enforced on this host.': 'CPU-Limits werden durch Festlegen auf Kerne durchgesetzt; das RAM-Limit wird auf diesem Host nicht durchgesetzt.',
      'This host cannot enforce CPU or RAM limits for a process (needs systemd user cgroups).': 'Dieser Host kann CPU- oder RAM-Limits für einen Prozess nicht durchsetzen (benötigt systemd-User-cgroups).',
      'Paper': 'Paper', 'Purpur': 'Purpur',
      'Scheduler': 'Zeitplaner', 'plan backups, restarts and commands': 'Backups, Neustarts und Befehle planen', 'Scheduled tasks': 'Geplante Aufgaben', 'Add task': 'Aufgabe hinzufügen', 'Edit task': 'Aufgabe bearbeiten',
      "Run backups, restarts, start/stop and console commands automatically. Times use the server's local time.": 'Backups, Neustarts, Start/Stopp und Konsolenbefehle automatisch ausführen. Zeiten gelten in der lokalen Zeit des Servers.',
      'When': 'Wann', 'Action': 'Aktion', 'Last run': 'Zuletzt ausgeführt', 'Next run': 'Nächste Ausführung', 'Run now': 'Jetzt ausführen', 'No scheduled tasks yet.': 'Noch keine geplanten Aufgaben.', 'paused': 'pausiert',
      'Backup': 'Backup', 'Console command': 'Konsolenbefehl', 'Command': 'Befehl', 'Warn players first': 'Spieler vorher warnen', 'seconds': 'Sekunden', 'Repeat': 'Wiederholen', 'Every day': 'Jeden Tag', 'On weekdays': 'An bestimmten Wochentagen',
      'Every few minutes': 'Alle paar Minuten', 'At': 'Um', 'minutes': 'Minuten', 'Mon': 'Mo', 'Tue': 'Di', 'Wed': 'Mi', 'Thu': 'Do', 'Fri': 'Fr', 'Sat': 'Sa', 'Sun': 'So', 'enabled': 'aktiviert', 'Task saved': 'Aufgabe gespeichert', 'Delete task?': 'Aufgabe löschen?',
      'backup started': 'Backup gestartet', 'restart scheduled': 'Neustart geplant', 'stop requested': 'Stopp angefordert', 'command sent': 'Befehl gesendet', 'started': 'gestartet', 'skipped (server not running)': 'übersprungen (Server läuft nicht)', 'skipped (already running)': 'übersprungen (läuft bereits)',
      'give the task a name': 'Gib der Aufgabe einen Namen', 'enter a console command': 'Gib einen Konsolenbefehl ein', 'pick at least one weekday': 'Wähle mindestens einen Wochentag', 'time must look like 04:30': 'Die Zeit muss wie 04:30 aussehen',
      'interval must be between 5 minutes and 7 days': 'Das Intervall muss zwischen 5 Minuten und 7 Tagen liegen',
      'new': 'neu', 'Update available': 'Update verfügbar',
      'This panel is reached over plain HTTP on a public address, so passwords and sessions can be intercepted. Put it behind HTTPS (see the README).': 'Dieses Panel wird über unverschlüsseltes HTTP auf einer öffentlichen Adresse aufgerufen, Passwörter und Sitzungen können mitgelesen werden. Stelle es hinter HTTPS (siehe README).',
      'This panel runs behind an HTTPS reverse proxy': 'Dieses Panel läuft hinter einem HTTPS-Reverse-Proxy',
      'Turn this on only when a proxy such as Caddy or nginx in front of the panel sets X-Forwarded-For and X-Forwarded-Proto. It enables Secure cookies and correct client IPs for login protection.': 'Aktiviere das nur, wenn ein Proxy wie Caddy oder nginx vor dem Panel X-Forwarded-For und X-Forwarded-Proto setzt. Es schaltet Secure-Cookies und die richtigen Client-IPs für den Login-Schutz ein.',
      'wrong username or password': 'Benutzername oder Passwort falsch',
      'the new version failed its start test, the old version is still active': 'Die neue Version hat den Starttest nicht bestanden, die alte Version bleibt aktiv',
      'Testing the new version': 'Teste die neue Version',
      'Installed': 'Installiert', 'Browse Modrinth': 'Modrinth durchsuchen', 'Updates': 'Updates', 'Modrinth': 'Modrinth', 'Search Modrinth...': 'Modrinth durchsuchen...', 'Nothing found.': 'Nichts gefunden.', 'Load more': 'Mehr laden',
      'Changes only take effect after a server restart. Required dependencies are installed automatically. Downloads come from Modrinth and are checked against their SHA-512.': 'Änderungen werden erst nach einem Server-Neustart wirksam. Benötigte Abhängigkeiten werden automatisch installiert. Downloads kommen von Modrinth und werden gegen deren SHA-512 geprüft.',
      'Check again': 'Erneut prüfen', 'Update all': 'Alle aktualisieren', 'Mod': 'Mod', 'Latest': 'Neueste', 'No compatible version': 'Keine kompatible Version', 'Install': 'Installieren', 'Versions': 'Versionen', 'No compatible versions.': 'Keine kompatiblen Versionen.',
      'Old files are moved to the mods-old (or plugins-old) folder instead of being deleted.': 'Alte Dateien werden in den Ordner mods-old (bzw. plugins-old) verschoben statt gelöscht.',
      'This server type has no mods or plugins on Modrinth.': 'Dieser Servertyp hat keine Mods oder Plugins auf Modrinth.', 'mods': 'Mods', 'plugins': 'Plugins', 'Checking...': 'Prüfe...', 'Everything is up to date': 'Alles ist aktuell', 'Could not reach Modrinth': 'Modrinth nicht erreichbar',
      'Already up to date': 'Bereits aktuell', 'Failed': 'Fehlgeschlagen',
      'Server software': 'Serversoftware', 'Upgrade server software': 'Serversoftware upgraden', 'Upgrade...': 'Upgraden...', 'Roll back': 'Zurückrollen', 'Upgrade': 'Upgraden', 'Installed': 'Installiert',
      'Upgrade Minecraft or the loader. A world backup is taken first, and you can roll back afterwards.': 'Minecraft oder den Loader upgraden. Vorher wird ein Welt-Backup erstellt, und du kannst danach zurückrollen.',
      'Loader version': 'Loader-Version', 'Allow an older Minecraft version (can damage the world)': 'Ältere Minecraft-Version erlauben (kann die Welt beschädigen)',
      'The Minecraft server must be stopped. It is not started again automatically.': 'Der Minecraft-Server muss gestoppt sein. Er wird nicht automatisch wieder gestartet.',
      'Last upgrade was rolled back.': 'Das letzte Upgrade wurde zurückgerollt.', 'Roll back the upgrade?': 'Upgrade zurückrollen?', 'Rolling back...': 'Rolle zurück...', 'Upgrading...': 'Upgrade läuft...', 'Done': 'Fertig', 'current': 'aktuell', 'none found': 'keine gefunden',
      'taking a world backup first': 'erstelle zuerst ein Welt-Backup', 'no world yet, nothing to back up': 'noch keine Welt, nichts zu sichern', 'saved the current launch files': 'aktuelle Startdateien gesichert', 'looking up version manifest': 'suche Versionsmanifest', 'downloading server.jar': 'lade server.jar herunter',
      'restarting the panel of this instance': 'starte das Panel dieser Instanz neu', 'done': 'fertig', 'stop the Minecraft server first': 'Stoppe zuerst den Minecraft-Server', 'that is already the installed version': 'Das ist bereits die installierte Version',
      'going to an older Minecraft version can damage the world, confirm it explicitly': 'Eine ältere Minecraft-Version kann die Welt beschädigen, bestätige das ausdrücklich', 'pick a Minecraft version': 'Wähle eine Minecraft-Version', 'nothing to roll back': 'Nichts zum Zurückrollen',
      'upgrading needs the Settings and Files permissions': 'Ein Upgrade braucht die Rechte Einstellungen und Dateien', 'that Minecraft version is not available for this loader': 'Diese Minecraft-Version gibt es für diesen Loader nicht',
      'Check for updates': 'Nach Updates suchen', 'could not check GitHub': 'GitHub nicht erreichbar',
      'Server icon': 'Server-Icon', 'Shown in the Minecraft server list. It is scaled to 64x64. Restart the server to apply it.': 'Wird in der Minecraft-Serverliste angezeigt. Es wird auf 64x64 skaliert. Starte den Server neu, um es zu übernehmen.',
      'Change icon...': 'Icon ändern...', 'Use the meowmarism icon': 'meowmarism-Icon verwenden', 'Server icon saved, restart the server to apply it': 'Server-Icon gespeichert, starte den Server neu, um es zu übernehmen',
      'That file is not an image': 'Diese Datei ist kein Bild', 'that is not a PNG image': 'Das ist kein PNG-Bild', 'Minecraft needs a 64x64 PNG': 'Minecraft braucht ein 64x64-PNG', 'the image is too large': 'Das Bild ist zu groß',
      'Install Java': 'Java installieren', 'Installing Java...': 'Installiere Java...', 'Java installed': 'Java installiert', 'none': 'keine',
      'installing Java needs the Settings and Files permissions': 'Java installieren braucht die Rechte Einstellungen und Dateien',
      'Manage': 'Verwalten', 'Manage instance': 'Instanz verwalten', 'resources, server software and removal': 'Ressourcen, Serversoftware und Entfernen', 'Danger zone': 'Gefahrenbereich',
      'Deleting the instance removes it from the panel and deletes its folder with the world, mods and configuration. The Minecraft server has to be stopped. This cannot be undone.': 'Beim Löschen wird die Instanz aus dem Panel entfernt und ihr Ordner mit Welt, Mods und Konfiguration gelöscht. Der Minecraft-Server muss gestoppt sein. Das lässt sich nicht rückgängig machen.',
      'Delete instance...': 'Instanz löschen...', 'Delete this instance?': 'Diese Instanz löschen?', 'Also delete its backups': 'Auch die Backups löschen', 'Type the instance name to confirm': 'Zur Bestätigung den Instanznamen eingeben', 'Delete everything': 'Alles löschen',
      'stop the server before deleting the instance': 'Stoppe den Server, bevor du die Instanz löschst',
      'this folder is too important to delete from here': 'Dieser Ordner ist zu wichtig, um ihn von hier zu löschen',
      'this instance folder also contains the panel itself, so it cannot be deleted from the panel': 'Dieser Instanzordner enthält auch das Panel selbst und kann deshalb nicht aus dem Panel gelöscht werden',
      'this does not look like a Minecraft server folder, nothing was deleted': 'Das sieht nicht wie ein Minecraft-Server-Ordner aus, es wurde nichts gelöscht',
      // units / misc words
      'hours': 'Stunden', 'minutes': 'Minuten', 'min': 'Min', 'sec': 'Sek', 'now': 'jetzt', 'lines': 'Zeilen', 'blocks': 'Blöcke', 'chunks': 'Chunks', 'bytes': 'Bytes', 'list': 'Liste', 'help': 'Hilfe', 'close': 'schließen', 'restart': 'Neustart', 'complete ·': 'abgeschlossen ·',
      
    },
  };
  // [English, French, Spanish] - core UI only; anything missing stays English.
  const CORE = [
      ['Server', 'Serveur', 'Servidor'],
      ['Manage users', 'Gérer les utilisateurs', 'Gestionar usuarios'],
      ['Update', 'Mise à jour', 'Actualización'],
      ['Settings', 'Paramètres', 'Ajustes'],
      ['Official version', 'Version officielle', 'Versión oficial'],
      ['License', 'Licence', 'Licencia'],
      ['Log out', 'Se déconnecter', 'Cerrar sesión'],
      ['Log in', 'Se connecter', 'Iniciar sesión'],
      ['Language', 'Langue', 'Idioma'],
      ['All instances', 'Toutes les instances', 'Todas las instancias'],
      ['Add user', 'Ajouter un utilisateur', 'Añadir usuario'],
      ['Create instance', 'Créer une instance', 'Crear instancia'],
      ['Instances', 'Instances', 'Instancias'],
      ['Instances on this host - each one is its own process with its own console, stats and backups.', 'Instances sur cet hôte - chacune est un processus distinct avec sa propre console, ses statistiques et ses sauvegardes.', 'Instancias en este host: cada una es un proceso independiente con su propia consola, estadísticas y copias de seguridad.'],
      ['Name', 'Nom', 'Nombre'],
      ['Usage', 'Utilisation', 'Uso'],
      ['Autostart', 'Démarrage auto', 'Inicio automático'],
      ['Open', 'Ouvrir', 'Abrir'],
      ['Start', 'Démarrer', 'Iniciar'],
      ['Stop', 'Arrêter', 'Detener'],
      ['Restart', 'Redémarrer', 'Reiniciar'],
      ['Remove', 'Supprimer', 'Eliminar'],
      ['Cancel', 'Annuler', 'Cancelar'],
      ['Save', 'Enregistrer', 'Guardar'],
      ['Edit', 'Modifier', 'Editar'],
      ['Close', 'Fermer', 'Cerrar'],
      ['Delete', 'Supprimer', 'Borrar'],
      ['Download', 'Télécharger', 'Descargar'],
      ['Upload', 'Téléverser', 'Subir'],
      ['Refresh', 'Actualiser', 'Actualizar'],
      ['Back', 'Retour', 'Atrás'],
      ['Next', 'Suivant', 'Siguiente'],
      ['Add', 'Ajouter', 'Añadir'],
      ['Clear', 'Effacer', 'Limpiar'],
      ['Send', 'Envoyer', 'Enviar'],
      ['Pause', 'Pause', 'Pausa'],
      ['Resume', 'Reprendre', 'Reanudar'],
      ['Password', 'Mot de passe', 'Contraseña'],
      ['Username', 'Nom d\'utilisateur', 'Usuario'],
      ['Repeat password', 'Répéter le mot de passe', 'Repetir contraseña'],
      ['Remember me', 'Rester connecté', 'Recordarme'],
      ['No instances yet - create one with the + button above.', 'Aucune instance - créez-en une avec le + ci-dessus.', 'Aún no hay instancias: crea una con el + de arriba.'],
      ['panel not started', 'panneau non démarré', 'panel no iniciado'],
      ['starting', 'démarrage', 'iniciando'],
      ['running', 'en cours', 'en marcha'],
      ['stopped', 'arrêté', 'detenido'],
      ['error', 'erreur', 'error'],
      ['Who can log in, and exactly what each account may do.', 'Qui peut se connecter et ce que chaque compte a le droit de faire.', 'Quién puede iniciar sesión y qué puede hacer exactamente cada cuenta.'],
      ['Access', 'Accès', 'Acceso'],
      ['Panel-wide behavior.', 'Comportement global du panneau.', 'Comportamiento de todo el panel.'],
      ['Require all servers to be stopped before updating', 'Exiger l\'arrêt de tous les serveurs avant la mise à jour', 'Exigir que todos los servidores estén detenidos antes de actualizar'],
      ['Saved.', 'Enregistré.', 'Guardado.'],
      ['Could not save.', 'Échec de l\'enregistrement.', 'No se pudo guardar.'],
      ['Installed version', 'Version installée', 'Versión instalada'],
      ['Latest release', 'Dernière version', 'Última versión'],
      ['Released', 'Publiée', 'Publicada'],
      ['Status', 'Statut', 'Estado'],
      ['update available', 'mise à jour disponible', 'actualización disponible'],
      ['up to date', 'à jour', 'actualizado'],
      ['Updating', 'Mise à jour', 'Actualizando'],
      ['Update now', 'Mettre à jour maintenant', 'Actualizar ahora'],
      ['Update now?', 'Mettre à jour maintenant ?', '¿Actualizar ahora?'],
      ['View release on GitHub', 'Voir la version sur GitHub', 'Ver versión en GitHub'],
      ['Leave this panel?', 'Quitter ce panneau ?', '¿Salir de este panel?'],
      ['Visit', 'Visiter', 'Visitar'],
      ['Confirm', 'Confirmer', 'Confirmar'],
      ['Remove this instance?', 'Supprimer cette instance ?', '¿Eliminar esta instancia?'],
      ['It disappears from this list, but files on disk are kept.', 'Elle disparaît de cette liste, mais les fichiers sur le disque sont conservés.', 'Desaparece de esta lista, pero los archivos del disco se conservan.'],
      ['Remove this user?', 'Supprimer cet utilisateur ?', '¿Eliminar este usuario?'],
      ['Stop this server?', 'Arrêter ce serveur ?', '¿Detener este servidor?'],
      ['Restart this server?', 'Redémarrer ce serveur ?', '¿Reiniciar este servidor?'],
      ['Stop the server?', 'Arrêter le serveur ?', '¿Detener el servidor?'],
      ['Restart the server?', 'Redémarrer le serveur ?', '¿Reiniciar el servidor?'],
      ['Players will be disconnected and the world is saved.', 'Les joueurs seront déconnectés et le monde est sauvegardé.', 'Los jugadores serán desconectados y el mundo se guarda.'],
      ['Players will be disconnected while it restarts.', 'Les joueurs seront déconnectés pendant le redémarrage.', 'Los jugadores serán desconectados mientras se reinicia.'],
      ['Preset', 'Modèle', 'Plantilla'],
      ['Viewer', 'Lecteur', 'Espectador'],
      ['Operator', 'Opérateur', 'Operador'],
      ['Manager', 'Gestionnaire', 'Gestor'],
      ['Administrator', 'Administrateur', 'Administrador'],
      ['Owner', 'Propriétaire', 'Propietario'],
      ['Custom', 'Personnalisé', 'Personalizado'],
      ['No access', 'Aucun accès', 'Sin acceso'],
      ['Default access to every instance', 'Accès par défaut à chaque instance', 'Acceso predeterminado a cada instancia'],
      ['Per-instance overrides', 'Exceptions par instance', 'Excepciones por instancia'],
      ['Create instances', 'Créer des instances', 'Crear instancias'],
      ['Update the panel', 'Mettre à jour le panneau', 'Actualizar el panel'],
      ['Console & players', 'Console et joueurs', 'Consola y jugadores'],
      ['Start / stop', 'Démarrer / arrêter', 'Iniciar / detener'],
      ['Remove instance', 'Supprimer l\'instance', 'Eliminar instancia'],
      ['View', 'Voir', 'Ver'],
      ['Files', 'Fichiers', 'Archivos'],
      ['Backups', 'Sauvegardes', 'Copias de seguridad'],
      ['Use default', 'Utiliser la valeur par défaut', 'Usar predeterminado'],
      ['Name it and pick what it runs.', 'Nommez-la et choisissez ce qu\'elle exécute.', 'Ponle nombre y elige qué ejecuta.'],
      ['Instance name', 'Nom de l\'instance', 'Nombre de la instancia'],
      ['Minecraft version', 'Version de Minecraft', 'Versión de Minecraft'],
      ['Loader version', 'Version du loader', 'Versión del loader'],
      ['Creating instance…', 'Création de l\'instance…', 'Creando instancia…'],
      ['Overview', 'Aperçu', 'Resumen'],
      ['Performance', 'Performances', 'Rendimiento'],
      ['Players', 'Joueurs', 'Jugadores'],
      ['Console', 'Console', 'Consola'],
      ['Automation', 'Automatisation', 'Automatización'],
      ['Events & Audit', 'Événements et audit', 'Eventos y auditoría'],
      ['System', 'Système', 'Sistema'],
      ['Live', 'En direct', 'En vivo'],
      ['connecting', 'connexion', 'conectando'],
      ['disconnected', 'déconnecté', 'desconectado'],
      ['live connected', 'connecté en direct', 'conectado en vivo'],
      ['Save changes', 'Enregistrer les modifications', 'Guardar cambios'],
      ['Reset changes', 'Annuler les modifications', 'Restablecer cambios'],
      ['Backup now', 'Sauvegarder maintenant', 'Copia de seguridad ahora'],
      ['Force stop', 'Forcer l\'arrêt', 'Forzar detención'],
      ['Player', 'Joueur', 'Jugador'],
      ['Kick', 'Expulser', 'Expulsar'],
      ['Ban', 'Bannir', 'Vetar'],
      ['Whitelist', 'Liste blanche', 'Lista blanca'],
      ['Operators', 'Opérateurs', 'Operadores'],
      ['Bans', 'Bannissements', 'Vetos'],
      ['Uptime', 'Disponibilité', 'Tiempo activo'],
      ['Memory', 'Mémoire', 'Memoria'],
      ['Disk', 'Disque', 'Disco'],
      ['Network', 'Réseau', 'Red'],
      ['Host', 'Hôte', 'Host'],
      ['Version', 'Version', 'Versión'],
      ['Size', 'Taille', 'Tamaño'],
      ['File', 'Fichier', 'Archivo'],
      ['Created', 'Créé', 'Creado'],
      ['Modified', 'Modifié', 'Modificado'],
      ['Delete file?', 'Supprimer le fichier ?', '¿Borrar el archivo?'],
      ['Delete folder?', 'Supprimer le dossier ?', '¿Borrar la carpeta?'],
      ['Delete backup?', 'Supprimer la sauvegarde ?', '¿Borrar la copia?'],
      ['Restore this backup?', 'Restaurer cette sauvegarde ?', '¿Restaurar esta copia?'],
      ['Restore', 'Restaurer', 'Restaurar'],
      ['Empty folder.', 'Dossier vide.', 'Carpeta vacía.'],
      ['No players online.', 'Aucun joueur en ligne.', 'No hay jugadores conectados.'],
      ['No backups yet.', 'Aucune sauvegarde.', 'Aún no hay copias.'],
      ['Loading...', 'Chargement...', 'Cargando...'],
      ['Filter console', 'Filtrer la console', 'Filtrar consola'],
      ['Filter this folder...', 'Filtrer ce dossier...', 'Filtrar esta carpeta...'],
      ['Filter mods...', 'Filtrer les mods...', 'Filtrar mods...'],
      ['Server settings saved', 'Paramètres du serveur enregistrés', 'Ajustes del servidor guardados'],
      ['Server restart requested', 'Redémarrage du serveur demandé', 'Reinicio del servidor solicitado'],
      ['Online now', 'En ligne', 'Conectados ahora'],
  ];
  DICT.fr = {}; DICT.es = {};
  for (const [en, fr, es] of CORE) { DICT.fr[en] = fr; DICT.es[en] = es; }

  const PATTERNS = {
    de: [
      [/^(\d+) settings$/, '$1 Einstellungen'],
      [/^Every (\d+) min$/, 'Alle $1 Min'],
      [/^This deletes the folder of "(.+)" with the world, mods and settings\.$/, 'Das löscht den Ordner von "$1" mit Welt, Mods und Einstellungen.'],
      [/^Port (\d+) is in use, (\d+) is free\.$/, 'Port $1 ist belegt, $2 ist frei.'],
      [/^port (\d+) is in use, using (\d+) instead$/, 'Port $1 ist belegt, nehme stattdessen $2'],
      [/^Port (\d+) is already used by another program\. Change the port under Settings \(server-port\) or stop the program that uses it\.$/, 'Port $1 wird schon von einem anderen Programm benutzt. Ändere den Port unter Einstellungen (server-port) oder beende das Programm.'],
      [/^Minecraft (.+) needs Java (\d+), found (.+)\.$/, 'Minecraft $1 braucht Java $2, gefunden: $3.'],
      [/^Java (\d+) is installed \(Java (\d+) needed\)\.$/, 'Java $1 ist installiert (Java $2 wird gebraucht).'],
      [/^Install Java (\d+)$/, 'Java $1 installieren'],
      [/^7 days$/, '7 Tage'],
      [/^Last upgrade: Minecraft (.+) to (.+)\.$/, 'Letztes Upgrade: Minecraft $1 auf $2.'],
      [/^This restores Minecraft (.+) and the world from the backup taken before the upgrade\. Everything played since the upgrade is lost\.$/, 'Das stellt Minecraft $1 und die Welt aus dem Backup vor dem Upgrade wieder her. Alles, was seit dem Upgrade gespielt wurde, geht verloren.'],
      [/^backup done: (.+)$/, 'Backup fertig: $1'],
      [/^failed: (.+)$/, 'Fehlgeschlagen: $1'],
      [/^Showing (mods|plugins|Mods|Plugins) for Minecraft (.+) \((.+)\)\.$/, 'Zeige $1 für Minecraft $2 ($3).'],
      [/^Installed (\d+) file\(s\), restart the server to load them$/, '$1 Datei(en) installiert, starte den Server neu, um sie zu laden'],
      [/^(\d+) update\(s\) available$/, '$1 Update(s) verfügbar'],
      [/^(\d+) file\(s\) are not on Modrinth and are not checked: (.+)$/, '$1 Datei(en) sind nicht auf Modrinth und werden nicht geprüft: $2'],
      [/^Every day at (.+)$/, 'Jeden Tag um $1'],
      [/^(.+) at (\d\d:\d\d)$/, '$1 um $2'],
      [/^Synced · (\d+) settings$/, 'Synchronisiert · $1 Einstellungen'],
      [/^Live · ([\d.]+) s behind$/, 'Live · $1 s hinterher'],
      [/^(\d+) (min|sec) warning$/, (m, n, u) => `Warnung ${n} ${u === 'min' ? 'Min' : 'Sek'}`],
      [/^(\d+) (lines|spikes|changes)$/, (m, n, u) => `${n} ${{ lines: 'Zeilen', spikes: 'Spitzen', changes: 'Änderungen' }[u]}`],
      [/^(\d+) enabled - (\d+) disabled$/, '$1 aktiviert - $2 deaktiviert'],
      [/^(\d+) cores$/, '$1 Kerne'],
      [/^(\d+) samples$/, '$1 Samples'],
      [/^([\d.]+ \w+) used$/, '$1 belegt'],
      [/^([\d.]+ \w+) total$/, '$1 gesamt'],
      [/^([\d.]+ \w+) RAM$/, '$1 RAM'],
      [/^Creating "(.+)"…$/, 'Erstelle "$1"…'],
      [/^Failed to create "(.+)"$/, '"$1" konnte nicht erstellt werden'],
      [/^"(.+)" is ready$/, '"$1" ist bereit'],
      [/^too many attempts, try again in (\d+) s$/, 'Zu viele Versuche, versuche es in $1 s erneut'],
      [/^The last update to v(.+) failed \((.+)\) and was rolled back to v(.+)\.$/, 'Das letzte Update auf v$1 ist fehlgeschlagen ($2) und wurde auf v$3 zurückgesetzt.'],
      [/^Update failed: (.+)$/, 'Update fehlgeschlagen: $1'],
      [/^installing failed, the old version is still active \((.+)\)$/, 'Installation fehlgeschlagen, die alte Version bleibt aktiv ($1)'],
      [/^the downloaded release failed its syntax check$/, 'Die heruntergeladene Version hat die Syntaxprüfung nicht bestanden'],
      [/^Stop all servers before updating \(running: (.+)\)\.$/, 'Stoppe vor dem Update alle Server (laufend: $1).'],
      [/^stop all servers first \(running: (.+)\)$/, 'Stoppe zuerst alle Server (laufend: $1)'],
      [/^Do you want to visit (.+)\? This opens in a new tab\.$/, 'Möchtest du $1 besuchen? Das öffnet sich in einem neuen Tab.'],
      [/^"(.+)" will not be able to log in anymore\.$/, '"$1" kann sich danach nicht mehr anmelden.'],
      [/^our GitHub$/, 'unser GitHub'],
      [/^the license on GitHub$/, 'die Lizenz auf GitHub'],
      [/^the release notes on GitHub$/, 'die Release-Notes auf GitHub'],
      [/^(\d+) minutes? with no players$/, '$1 Minuten ohne Spieler'],
      [/^Server ready · startup (.+)$/, 'Server bereit · Start $1'],
      [/^Uploaded (.+)$/, '$1 hochgeladen'],

    ],
  };

  let lang = 'en';
  try { lang = localStorage.getItem('lang') || ''; } catch (_) {}
  if (!LANGS[lang]) { const guess = (navigator.language || 'en').slice(0, 2).toLowerCase(); lang = LANGS[guess] ? guess : 'en'; }
  const dict = DICT[lang] || null;
  const patterns = PATTERNS[lang] || [];

  function translate(s) {
    if (!dict) return s;
    const core = s.trim();
    if (!core || !/[A-Za-z]{2}/.test(core)) return s;
    let out = dict[core];
    if (out === undefined) {
      for (const [re, rep] of patterns) {
        if (re.test(core)) { out = core.replace(re, rep); break; }
      }
    }
    if (out === undefined || out === core) return s;
    return s.replace(core, out);
  }

  window.t = (s, vars) => {
    let out = translate(s);
    if (vars) for (const k of Object.keys(vars)) out = out.split(`{${k}}`).join(vars[k]);
    return out;
  };
  window.i18nLang = lang;

  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  const SKIP = 'script,style,textarea,pre,code,[data-no-i18n],#console';
  const skipped = (el) => !el || (el.closest && el.closest(SKIP));

  function fixText(node) {
    if (skipped(node.parentElement)) return;
    const next = translate(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }
  function fixAttrs(el) {
    if (skipped(el)) return;
    for (const a of ATTRS) {
      const v = el.getAttribute(a);
      if (v) { const next = translate(v); if (next !== v) el.setAttribute(a, next); }
    }
  }
  function fixTree(root) {
    if (root.nodeType === 3) { fixText(root); return; }
    if (root.nodeType !== 1) return;
    fixAttrs(root);
    root.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(fixAttrs);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) fixText(w.currentNode);
  }

  function setLang(next) {
    try { localStorage.setItem('lang', next); } catch (_) {}
    location.reload();
  }

  const flagSvg = (code) => `<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;flex:0 0 auto">${FLAGS[code] || ''}</svg>`;
  const style = document.createElement('style');
  style.textContent = '@media(min-width:761px){html.lang-menu-open .sidebar{width:var(--sidebar-open,208px)!important}}'
    + 'html.lang-menu-open .sidebar .side-label,html.lang-menu-open .sidebar .side-pill,html.lang-menu-open .sidebar .side-brand-text,html.lang-menu-open .sidebar .side-account-info,html.lang-menu-open .sidebar .side-meta,html.lang-menu-open .sidebar .live-row span+span,html.lang-menu-open .sidebar #updateBadge{opacity:1!important}'
    + '.lang-menu button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:9px 12px;border:0;border-radius:0;background:transparent;color:#9299a3;cursor:pointer;font:inherit}'
    + '.lang-menu button:hover{color:#e7e9ec;background:rgba(255,255,255,.04)}'
    + '.lang-menu button.active{color:#e7e9ec;background:rgba(255,111,196,.1);box-shadow:inset 2px 0 0 #ff6fc4}';
  style.textContent += '.lang-flag{display:block;width:18px;height:12px;border-radius:2px;flex:0 0 auto}';
  document.head.appendChild(style);

  let menu = null;
  function closeMenu() {
    if (menu) { menu.remove(); menu = null; }
    document.documentElement.classList.remove('lang-menu-open');
  }
  function openMenu(anchor) {
    closeMenu();
    document.documentElement.classList.add('lang-menu-open');
    menu = document.createElement('div');
    menu.className = 'lang-menu';
    menu.setAttribute('data-no-i18n', '');
    menu.style.cssText = 'position:fixed;z-index:200;min-width:170px;background:#17191d;border:1px solid #292d32;border-radius:8px;padding:4px 0;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.4);font:13px Inter,ui-sans-serif,system-ui,sans-serif';
    for (const [code, name] of Object.entries(LANGS)) {
      const item = document.createElement('button');
      item.type = 'button';
      if (code === lang) item.className = 'active';
      item.innerHTML = flagSvg(code) + '<span></span>';
      item.lastChild.textContent = name;
      item.onclick = () => { if (code === lang) closeMenu(); else setLang(code); };
      menu.appendChild(item);
    }
    document.body.appendChild(menu);
    const r = anchor.getBoundingClientRect();
    const h = menu.offsetHeight;
    const openW = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-open'), 10) || 208;
    const left = anchor.closest('.sidebar') ? (window.innerWidth > 760 ? openW + 6 : r.left) : r.right + 6;
    menu.style.left = Math.max(8, Math.min(left, window.innerWidth - menu.offsetWidth - 8)) + 'px';
    menu.style.top = Math.max(8, Math.min(r.bottom - h, window.innerHeight - h - 8)) + 'px';
  }
  function wireToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach((el) => {
      const icon = el.querySelector('svg, img.lang-flag');
      if (icon) {
        const src = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">${FLAGS[lang] || ''}</svg>`);
        if (icon.tagName === 'IMG') { if (icon.getAttribute('src') !== src) icon.setAttribute('src', src); }
        else { const img = document.createElement('img'); img.className = 'lang-flag'; img.alt = ''; img.src = src; icon.replaceWith(img); }
      }
      const label = el.querySelector('[data-lang-label]');
      if (label && label.textContent !== LANGS[lang]) label.textContent = LANGS[lang];
      if (!el.dataset.langWired) {
        el.dataset.langWired = '1';
        el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openMenu(el); });
      }
    });
  }
  document.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  document.documentElement.lang = lang;
  if (dict) {
    new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === 'characterData') fixTree(m.target);
        else if (m.type === 'attributes') fixAttrs(m.target);
        else m.addedNodes.forEach(fixTree);
      }
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (dict) fixTree(document.documentElement);
    wireToggles();
    if (dict) new MutationObserver(wireToggles).observe(document.body, { childList: true, subtree: true });
  });
})();
