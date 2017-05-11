'use strict'

var Utils = require('../../libs/utils');
var items;
var command= '';
// KODI Commands
var KODIcommands = [
  { "name": 'left', "method": "Input.ExecuteAction", "params":{ "action": "left"}},
  { "name": 'right', "method": "Input.ExecuteAction", "params":{ "action": "right"}},
  { "name": 'up', "method": "Input.ExecuteAction", "params":{ "action": "up"}},
  { "name": 'down', "method": "Input.ExecuteAction", "params":{ "action": "down"}},
  { "name": 'pageup', "method": "Input.ExecuteAction", "params":{ "action": "pageup"}},
  { "name": 'pagedown', "method": "Input.ExecuteAction", "params":{ "action": "pagedown"}},
  { "name": 'select', "method": "Input.ExecuteAction", "params":{ "action": "select"}},
  { "name": 'highlight', "method": "Input.ExecuteAction", "params":{ "action": "highlight"}},
  { "name": 'parentdir', "method": "Input.ExecuteAction", "params":{ "action": "parentdir"}},
  { "name": 'parentfolder', "method": "Input.ExecuteAction", "params":{ "action": "parentfolder"}},
  { "name": 'back', "method": "Input.ExecuteAction", "params":{ "action": "back"}},
  { "name": 'menu', "method": "Input.ExecuteAction", "params":{ "action": "menu"}},
  { "name": 'previousmenu', "method": "Input.ExecuteAction", "params":{ "action": "previousmenu"}},
  { "name": 'info', "method": "Input.ExecuteAction", "params":{ "action": "info"}},
  { "name": 'pause', "method": "Input.ExecuteAction", "params":{ "action": "pause"}},
  { "name": 'stop', "method": "Input.ExecuteAction", "params":{ "action": "stop"}},
  { "name": 'skipnext', "method": "Input.ExecuteAction", "params":{ "action": "skipnext"}},
  { "name": 'skipprevious', "method": "Input.ExecuteAction", "params":{ "action": "skipprevious"}},
  { "name": 'fullscreen', "method": "Input.ExecuteAction", "params":{ "action": "fullscreen"}},
  { "name": 'aspectratio', "method": "Input.ExecuteAction", "params":{ "action": "aspectratio"}},
  { "name": 'stepforward', "method": "Input.ExecuteAction", "params":{ "action": "stepforward"}},
  { "name": 'stepback', "method": "Input.ExecuteAction", "params":{ "action": "stepback"}},
  { "name": 'bigstepforward', "method": "Input.ExecuteAction", "params":{ "action": "bigstepforward"}},
  { "name": 'bigstepback', "method": "Input.ExecuteAction", "params":{ "action": "bigstepback"}},
  { "name": 'chapterorbigstepforward', "method": "Input.ExecuteAction", "params":{ "action": "chapterorbigstepforward"}},
  { "name": 'chapterorbigstepback', "method": "Input.ExecuteAction", "params":{ "action": "chapterorbigstepback"}},
  { "name": 'osd', "method": "Input.ExecuteAction", "params":{ "action": "osd"}},
  { "name": 'showsubtitles', "method": "Input.ExecuteAction", "params":{ "action": "showsubtitles"}},
  { "name": 'nextsubtitle', "method": "Input.ExecuteAction", "params":{ "action": "nextsubtitle"}},
  { "name": 'cyclesubtitle', "method": "Input.ExecuteAction", "params":{ "action": "cyclesubtitle"}},
  { "name": 'playerdebug', "method": "Input.ExecuteAction", "params":{ "action": "playerdebug"}},
  { "name": 'codecinfo', "method": "Input.ExecuteAction", "params":{ "action": "codecinfo"}},
  { "name": 'playerprocessinfo', "method": "Input.ExecuteAction", "params":{ "action": "playerprocessinfo"}},
  { "name": 'nextpicture', "method": "Input.ExecuteAction", "params":{ "action": "nextpicture"}},
  { "name": 'previouspicture', "method": "Input.ExecuteAction", "params":{ "action": "previouspicture"}},
  { "name": 'zoomout', "method": "Input.ExecuteAction", "params":{ "action": "zoomout"}},
  { "name": 'zoomin', "method": "Input.ExecuteAction", "params":{ "action": "zoomin"}},
  { "name": 'playlist', "method": "Input.ExecuteAction", "params":{ "action": "playlist"}},
  { "name": 'queue', "method": "Input.ExecuteAction", "params":{ "action": "queue"}},
  { "name": 'zoomnormal', "method": "Input.ExecuteAction", "params":{ "action": "zoomnormal"}},
  { "name": 'zoomlevel1', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel1"}},
  { "name": 'zoomlevel2', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel2"}},
  { "name": 'zoomlevel3', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel3"}},
  { "name": 'zoomlevel4', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel4"}},
  { "name": 'zoomlevel5', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel5"}},
  { "name": 'zoomlevel6', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel6"}},
  { "name": 'zoomlevel7', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel7"}},
  { "name": 'zoomlevel8', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel8"}},
  { "name": 'zoomlevel9', "method": "Input.ExecuteAction", "params":{ "action": "zoomlevel9"}},
  { "name": 'nextcalibration', "method": "Input.ExecuteAction", "params":{ "action": "nextcalibration"}},
  { "name": 'resetcalibration', "method": "Input.ExecuteAction", "params":{ "action": "resetcalibration"}},
  { "name": 'analogmove', "method": "Input.ExecuteAction", "params":{ "action": "analogmove"}},
  { "name": 'analogmovex', "method": "Input.ExecuteAction", "params":{ "action": "analogmovex"}},
  { "name": 'analogmovey', "method": "Input.ExecuteAction", "params":{ "action": "analogmovey"}},
  { "name": 'rotate', "method": "Input.ExecuteAction", "params":{ "action": "rotate"}},
  { "name": 'rotateccw', "method": "Input.ExecuteAction", "params":{ "action": "rotateccw"}},
  { "name": 'close', "method": "Input.ExecuteAction", "params":{ "action": "close"}},
  { "name": 'subtitledelayminus', "method": "Input.ExecuteAction", "params":{ "action": "subtitledelayminus"}},
  { "name": 'subtitledelay', "method": "Input.ExecuteAction", "params":{ "action": "subtitledelay"}},
  { "name": 'subtitledelayplus', "method": "Input.ExecuteAction", "params":{ "action": "subtitledelayplus"}},
  { "name": 'audiodelayminus', "method": "Input.ExecuteAction", "params":{ "action": "audiodelayminus"}},
  { "name": 'audiodelay', "method": "Input.ExecuteAction", "params":{ "action": "audiodelay"}},
  { "name": 'audiodelayplus', "method": "Input.ExecuteAction", "params":{ "action": "audiodelayplus"}},
  { "name": 'subtitleshiftup', "method": "Input.ExecuteAction", "params":{ "action": "subtitleshiftup"}},
  { "name": 'subtitleshiftdown', "method": "Input.ExecuteAction", "params":{ "action": "subtitleshiftdown"}},
  { "name": 'subtitlealign', "method": "Input.ExecuteAction", "params":{ "action": "subtitlealign"}},
  { "name": 'audionextlanguage', "method": "Input.ExecuteAction", "params":{ "action": "audionextlanguage"}},
  { "name": 'verticalshiftup', "method": "Input.ExecuteAction", "params":{ "action": "verticalshiftup"}},
  { "name": 'verticalshiftdown', "method": "Input.ExecuteAction", "params":{ "action": "verticalshiftdown"}},
  { "name": 'nextresolution', "method": "Input.ExecuteAction", "params":{ "action": "nextresolution"}},
  { "name": 'audiotoggledigital', "method": "Input.ExecuteAction", "params":{ "action": "audiotoggledigital"}},
  { "name": 'number0', "method": "Input.ExecuteAction", "params":{ "action": "number0"}},
  { "name": 'number1', "method": "Input.ExecuteAction", "params":{ "action": "number1"}},
  { "name": 'number2', "method": "Input.ExecuteAction", "params":{ "action": "number2"}},
  { "name": 'number3', "method": "Input.ExecuteAction", "params":{ "action": "number3"}},
  { "name": 'number4', "method": "Input.ExecuteAction", "params":{ "action": "number4"}},
  { "name": 'number5', "method": "Input.ExecuteAction", "params":{ "action": "number5"}},
  { "name": 'number6', "method": "Input.ExecuteAction", "params":{ "action": "number6"}},
  { "name": 'number7', "method": "Input.ExecuteAction", "params":{ "action": "number7"}},
  { "name": 'number8', "method": "Input.ExecuteAction", "params":{ "action": "number8"}},
  { "name": 'number9', "method": "Input.ExecuteAction", "params":{ "action": "number9"}},
  { "name": 'smallstepback', "method": "Input.ExecuteAction", "params":{ "action": "smallstepback"}},
  { "name": 'fastforward', "method": "Input.ExecuteAction", "params":{ "action": "fastforward"}},
  { "name": 'rewind', "method": "Input.ExecuteAction", "params":{ "action": "rewind"}},
  { "name": 'play', "method": "Input.ExecuteAction", "params":{ "action": "play"}},
  { "name": 'playpause', "method": "Input.ExecuteAction", "params":{ "action": "playpause"}},
  { "name": 'switchplayer', "method": "Input.ExecuteAction", "params":{ "action": "switchplayer"}},
  { "name": 'delete', "method": "Input.ExecuteAction", "params":{ "action": "delete"}},
  { "name": 'copy', "method": "Input.ExecuteAction", "params":{ "action": "copy"}},
  { "name": 'move', "method": "Input.ExecuteAction", "params":{ "action": "move"}},
  { "name": 'screenshot', "method": "Input.ExecuteAction", "params":{ "action": "screenshot"}},
  { "name": 'rename', "method": "Input.ExecuteAction", "params":{ "action": "rename"}},
  { "name": 'togglewatched', "method": "Input.ExecuteAction", "params":{ "action": "togglewatched"}},
  { "name": 'scanitem', "method": "Input.ExecuteAction", "params":{ "action": "scanitem"}},
  { "name": 'reloadkeymaps', "method": "Input.ExecuteAction", "params":{ "action": "reloadkeymaps"}},
  { "name": 'volumeup', "method": "Input.ExecuteAction", "params":{ "action": "volumeup"}},
  { "name": 'volumedown', "method": "Input.ExecuteAction", "params":{ "action": "volumedown"}},
  { "name": 'mute', "method": "Input.ExecuteAction", "params":{ "action": "mute"}},
  { "name": 'backspace', "method": "Input.ExecuteAction", "params":{ "action": "backspace"}},
  { "name": 'scrollup', "method": "Input.ExecuteAction", "params":{ "action": "scrollup"}},
  { "name": 'scrolldown', "method": "Input.ExecuteAction", "params":{ "action": "scrolldown"}},
  { "name": 'analogfastforward', "method": "Input.ExecuteAction", "params":{ "action": "analogfastforward"}},
  { "name": 'analogrewind', "method": "Input.ExecuteAction", "params":{ "action": "analogrewind"}},
  { "name": 'moveitemup', "method": "Input.ExecuteAction", "params":{ "action": "moveitemup"}},
  { "name": 'moveitemdown', "method": "Input.ExecuteAction", "params":{ "action": "moveitemdown"}},
  { "name": 'contextmenu', "method": "Input.ExecuteAction", "params":{ "action": "contextmenu"}},
  { "name": 'shift', "method": "Input.ExecuteAction", "params":{ "action": "shift"}},
  { "name": 'symbols', "method": "Input.ExecuteAction", "params":{ "action": "symbols"}},
  { "name": 'cursorleft', "method": "Input.ExecuteAction", "params":{ "action": "cursorleft"}},
  { "name": 'cursorright', "method": "Input.ExecuteAction", "params":{ "action": "cursorright"}},
  { "name": 'showtime', "method": "Input.ExecuteAction", "params":{ "action": "showtime"}},
  { "name": 'analogseekforward', "method": "Input.ExecuteAction", "params":{ "action": "analogseekforward"}},
  { "name": 'analogseekback', "method": "Input.ExecuteAction", "params":{ "action": "analogseekback"}},
  { "name": 'showpreset', "method": "Input.ExecuteAction", "params":{ "action": "showpreset"}},
  { "name": 'nextpreset', "method": "Input.ExecuteAction", "params":{ "action": "nextpreset"}},
  { "name": 'previouspreset', "method": "Input.ExecuteAction", "params":{ "action": "previouspreset"}},
  { "name": 'lockpreset', "method": "Input.ExecuteAction", "params":{ "action": "lockpreset"}},
  { "name": 'randompreset', "method": "Input.ExecuteAction", "params":{ "action": "randompreset"}},
  { "name": 'increasevisrating', "method": "Input.ExecuteAction", "params":{ "action": "increasevisrating"}},
  { "name": 'decreasevisrating', "method": "Input.ExecuteAction", "params":{ "action": "decreasevisrating"}},
  { "name": 'showvideomenu', "method": "Input.ExecuteAction", "params":{ "action": "showvideomenu"}},
  { "name": 'enter', "method": "Input.ExecuteAction", "params":{ "action": "enter"}},
  { "name": 'increaserating', "method": "Input.ExecuteAction", "params":{ "action": "increaserating"}},
  { "name": 'decreaserating', "method": "Input.ExecuteAction", "params":{ "action": "decreaserating"}},
  { "name": 'setrating', "method": "Input.ExecuteAction", "params":{ "action": "setrating"}},
  { "name": 'togglefullscreen', "method": "Input.ExecuteAction", "params":{ "action": "togglefullscreen"}},
  { "name": 'nextscene', "method": "Input.ExecuteAction", "params":{ "action": "nextscene"}},
  { "name": 'previousscene', "method": "Input.ExecuteAction", "params":{ "action": "previousscene"}},
  { "name": 'nextletter', "method": "Input.ExecuteAction", "params":{ "action": "nextletter"}},
  { "name": 'prevletter', "method": "Input.ExecuteAction", "params":{ "action": "prevletter"}},
  { "name": 'jumpsms2', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms2"}},
  { "name": 'jumpsms3', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms3"}},
  { "name": 'jumpsms4', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms4"}},
  { "name": 'jumpsms5', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms5"}},
  { "name": 'jumpsms6', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms6"}},
  { "name": 'jumpsms7', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms7"}},
  { "name": 'jumpsms8', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms8"}},
  { "name": 'jumpsms9', "method": "Input.ExecuteAction", "params":{ "action": "jumpsms9"}},
  { "name": 'filter', "method": "Input.ExecuteAction", "params":{ "action": "filter"}},
  { "name": 'filterclear', "method": "Input.ExecuteAction", "params":{ "action": "filterclear"}},
  { "name": 'filtersms2', "method": "Input.ExecuteAction", "params":{ "action": "filtersms2"}},
  { "name": 'filtersms3', "method": "Input.ExecuteAction", "params":{ "action": "filtersms3"}},
  { "name": 'filtersms4', "method": "Input.ExecuteAction", "params":{ "action": "filtersms4"}},
  { "name": 'filtersms5', "method": "Input.ExecuteAction", "params":{ "action": "filtersms5"}},
  { "name": 'filtersms6', "method": "Input.ExecuteAction", "params":{ "action": "filtersms6"}},
  { "name": 'filtersms7', "method": "Input.ExecuteAction", "params":{ "action": "filtersms7"}},
  { "name": 'filtersms8', "method": "Input.ExecuteAction", "params":{ "action": "filtersms8"}},
  { "name": 'filtersms9', "method": "Input.ExecuteAction", "params":{ "action": "filtersms9"}},
  { "name": 'firstpage', "method": "Input.ExecuteAction", "params":{ "action": "firstpage"}},
  { "name": 'lastpage', "method": "Input.ExecuteAction", "params":{ "action": "lastpage"}},
  { "name": 'guiprofile', "method": "Input.ExecuteAction", "params":{ "action": "guiprofile"}},
  { "name": 'red', "method": "Input.ExecuteAction", "params":{ "action": "red"}},
  { "name": 'green', "method": "Input.ExecuteAction", "params":{ "action": "green"}},
  { "name": 'yellow', "method": "Input.ExecuteAction", "params":{ "action": "yellow"}},
  { "name": 'blue', "method": "Input.ExecuteAction", "params":{ "action": "blue"}},
  { "name": 'increasepar', "method": "Input.ExecuteAction", "params":{ "action": "increasepar"}},
  { "name": 'decreasepar', "method": "Input.ExecuteAction", "params":{ "action": "decreasepar"}},
  { "name": 'volampup', "method": "Input.ExecuteAction", "params":{ "action": "volampup"}},
  { "name": 'volampdown', "method": "Input.ExecuteAction", "params":{ "action": "volampdown"}},
  { "name": 'volumeamplification', "method": "Input.ExecuteAction", "params":{ "action": "volumeamplification"}},
  { "name": 'createbookmark', "method": "Input.ExecuteAction", "params":{ "action": "createbookmark"}},
  { "name": 'createepisodebookmark', "method": "Input.ExecuteAction", "params":{ "action": "createepisodebookmark"}},
  { "name": 'settingsreset', "method": "Input.ExecuteAction", "params":{ "action": "settingsreset"}},
  { "name": 'settingslevelchange', "method": "Input.ExecuteAction", "params":{ "action": "settingslevelchange"}},
  { "name": 'stereomode', "method": "Input.ExecuteAction", "params":{ "action": "stereomode"}},
  { "name": 'nextstereomode', "method": "Input.ExecuteAction", "params":{ "action": "nextstereomode"}},
  { "name": 'previousstereomode', "method": "Input.ExecuteAction", "params":{ "action": "previousstereomode"}},
  { "name": 'togglestereomode', "method": "Input.ExecuteAction", "params":{ "action": "togglestereomode"}},
  { "name": 'stereomodetomono', "method": "Input.ExecuteAction", "params":{ "action": "stereomodetomono"}},
  { "name": 'channelup', "method": "Input.ExecuteAction", "params":{ "action": "channelup"}},
  { "name": 'channeldown', "method": "Input.ExecuteAction", "params":{ "action": "channeldown"}},
  { "name": 'previouschannelgroup', "method": "Input.ExecuteAction", "params":{ "action": "previouschannelgroup"}},
  { "name": 'nextchannelgroup', "method": "Input.ExecuteAction", "params":{ "action": "nextchannelgroup"}},
  { "name": 'playpvr', "method": "Input.ExecuteAction", "params":{ "action": "playpvr"}},
  { "name": 'playpvrtv', "method": "Input.ExecuteAction", "params":{ "action": "playpvrtv"}},
  { "name": 'playpvrradio', "method": "Input.ExecuteAction", "params":{ "action": "playpvrradio"}},
  { "name": 'record', "method": "Input.ExecuteAction", "params":{ "action": "record"}},
  { "name": 'togglecommskip', "method": "Input.ExecuteAction", "params":{ "action": "togglecommskip"}},
  { "name": 'showtimerrule', "method": "Input.ExecuteAction", "params":{ "action": "showtimerrule"}},
  { "name": 'leftclick', "method": "Input.ExecuteAction", "params":{ "action": "leftclick"}},
  { "name": 'rightclick', "method": "Input.ExecuteAction", "params":{ "action": "rightclick"}},
  { "name": 'middleclick', "method": "Input.ExecuteAction", "params":{ "action": "middleclick"}},
  { "name": 'doubleclick', "method": "Input.ExecuteAction", "params":{ "action": "doubleclick"}},
  { "name": 'longclick', "method": "Input.ExecuteAction", "params":{ "action": "longclick"}},
  { "name": 'wheelup', "method": "Input.ExecuteAction", "params":{ "action": "wheelup"}},
  { "name": 'wheeldown', "method": "Input.ExecuteAction", "params":{ "action": "wheeldown"}},
  { "name": 'mousedrag', "method": "Input.ExecuteAction", "params":{ "action": "mousedrag"}},
  { "name": 'mousemove', "method": "Input.ExecuteAction", "params":{ "action": "mousemove"}},
  { "name": 'tap', "method": "Input.ExecuteAction", "params":{ "action": "tap"}},
  { "name": 'longpress', "method": "Input.ExecuteAction", "params":{ "action": "longpress"}},
  { "name": 'pangesture', "method": "Input.ExecuteAction", "params":{ "action": "pangesture"}},
  { "name": 'zoomgesture', "method": "Input.ExecuteAction", "params":{ "action": "zoomgesture"}},
  { "name": 'rotategesture', "method": "Input.ExecuteAction", "params":{ "action": "rotategesture"}},
  { "name": 'swipeleft', "method": "Input.ExecuteAction", "params":{ "action": "swipeleft"}},
  { "name": 'swiperight', "method": "Input.ExecuteAction", "params":{ "action": "swiperight"}},
  { "name": 'swipeup', "method": "Input.ExecuteAction", "params":{ "action": "swipeup"}},
  { "name": 'swipedown', "method": "Input.ExecuteAction", "params":{ "action": "swipedown"}},
  { "name": 'error', "method": "Input.ExecuteAction", "params":{ "action": "error"}},
  { "name": 'noop', "method": "Input.ExecuteAction", "params":{ "action": "noop"}}   
];


function init () {
  Homey.log('init()')

  // Register functions to Homey
  Homey.manager('speech-input').on('speech', parseSpeach)
  Homey.manager('flow').on('action.play_movie_kodi', onFlowActionPlayMovieKodi)
  Homey.manager('flow').on('action.pause_resume_kodi', onFlowActionPauseResumeKodi)
  Homey.manager('flow').on('action.stop_kodi', onFlowActionStopKodi)
  Homey.manager('flow').on('action.play_latest_episode_kodi', onFlowActionPlayLatestEpisode)
  Homey.manager('flow').on('action.hibernate_kodi', onFlowActionHibernate)
  Homey.manager('flow').on('action.reboot_kodi', onFlowActionReboot)
  Homey.manager('flow').on('action.shutdown_kodi', onFlowActionShutdown)
  Homey.manager('flow').on('action.play_music_by_artist', onFlowActionPlayMusicByArtist)
  Homey.manager('flow').on('action.mute_kodi', onFlowActionMuteKodi)
  Homey.manager('flow').on('action.unmute_kodi', onFlowActionUnmuteKodi)
  Homey.manager('flow').on('action.subtitle_on', onFlowActionSubtitleOn)
  Homey.manager('flow').on('action.subtitle_off', onFlowActionSubtitleOff)
  Homey.manager('flow').on('action.party_mode_kodi', onFlowActionSetPartyMode)
  Homey.manager('flow').on('action.set_volume', onFlowActionSetVolume)
  Homey.manager('flow').on('action.SetCommand', function (callback, args) { 
    onFlowActionKODICommand (callback, args);
    callback(null, true);
  });
  Homey.manager('flow').on('action.SetCommand.KODICommand.autocomplete', function (callback, value) {
    var commandSearchString = value.query;
    var items = searchItems(commandSearchString, KODIcommands);
    callback(null, items);
	});
}
module.exports.init = init

/* ******************
	SEARCHITEMS
******************* */
function searchItems(value, optionsArray) {

    var serveItems = [];
    for (var i = 0; i < optionsArray.length; i++) {
        var serveItem = optionsArray[i];
        if (serveItem.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            serveItems.push(serveItem = optionsArray[i]);
        }
    }
    return serveItems;
}
/* ******************
	SEARCHITEMS
******************* */

/* ******************
	SPEECH FUNCTIONS
******************* */
function parseSpeach (speech, callback) {
  Homey.log('parseSpeach()', speech)
  console.log(speech)
  speech.triggers.some(function (trigger) {
    switch (trigger.id) {
      case 'kodi_play_movie' :
        // Parse the movie title from speech transcript
        var movieTitle = speech.transcript.replace(trigger.text, '')

        // Try to lookup the movie
        // NOTE:	no multiple device support yet, pass null as device so 1st registered device gets picked
        searchAndPlayMovie(null, movieTitle).catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
          }
        )

        // Only execute 1 trigger
        return true

      case 'kodi_play_tvshow' :
        speech.say(__('talkback.not_implemented'))
        // Only fire 1 trigger
        return true

      case 'kodi_play_music' :
        var musicTranscriptWithoutTrigger = speech.transcript.replace(trigger.text, '')
        // Check how to search for music
        if (musicTranscriptWithoutTrigger.indexOf(__('speech.by')) > -1 || musicTranscriptWithoutTrigger.indexOf(__('speech.artist')) > -1) {
          var artistSearchQuery = musicTranscriptWithoutTrigger.replace(__('speech.by'), '').replace(__('speech.artist'), '')
          // NOTE:	no multiple device support yet, pass null as device so 1st registered device gets picked
          searchAndPlayMusic(null, 'ARTIST', artistSearchQuery)
            .catch(
              function (err) {
                // Driver should throw user friendly errors
                speech.say(err)
              }
          )
        } else if (1 === 0) {
          // Add search by album / genre
        }
        // Only fire 1 trigger
        return true

      case 'kodi_play_pause' :
        Homey.manager('drivers').getDriver('kodi').playPause(null)
          .catch(
            function (err) {
              // Driver should throw user friendly errors
              speech.say(err)
            }
        )
        return true // Only fire one trigger

      case 'kodi_stop' :
        Homey.manager('drivers').getDriver('kodi').stop(null)
        .catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
          }
        )
        return true // Only fire one trigger

      case 'kodi_next' :
        Homey.manager('drivers').getDriver('kodi').nextOrPreviousTrack(null, 'next')
        .catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
          }
        )
        return true // Only fire one trigger

      case 'kodi_previous' :
        Homey.manager('drivers').getDriver('kodi').nextOrPreviousTrack(null, 'previous')
        .catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
          }
        )
        return true // Only fire one trigger

      case 'kodi_play_latest_episode' :
        var episodeTranscriptWithoutTrigger = speech.transcript.replace(trigger.text, '').replace(__('of'), '')

        playLatestEpisode(null, episodeTranscriptWithoutTrigger)
        .catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
            // 1 Retry
            speech.ask(__('question.latest_episode_retry'), function (err, result) {
              if (err) {
                speech.say(__('talkback.something_went_wrong') + ' ' + err)
              } else {
                console.log('result:', result)
                playLatestEpisode(null, result)
                .catch(
                  function (err) {
                    // Driver should throw user friendly errors
                    speech.say(err)
                  }
                )
              }
            })
          }
        )
        return true // Only fire one trigger

      case 'kodi_watch_movie' :
        speech.ask(__('question.what_movie'), function (err, result) {
          if (err) {
            speech.say(__('talkback.something_went_wrong') + ' ' + err)
          } else {
            // Try to lookup the movie (result = movietitle)
            // NOTE:	no multiple device support yet, pass null as device so 1st registered device gets picked
            searchAndPlayMovie(null, result).catch(
              function (err) {
                // Driver should throw user friendly errors
                speech.say(err)
              }
            )
          }
        })
        return true // Only fire  one trigger

      case 'kodi_hibernate' :
        // Confirm whether to hibernate
        Homey.manager('speech-input').confirm(__('question.confirm_hibernate'), function (err, confirmed) {
          if (err) {
            speech.say(__('talkback.something_went_wrong') + ' ' + err)
          } else if (confirmed) {
            // Hibernate Kodi
            Homey.manager('drivers').getDriver('kodi').hibernateKodi(null)
            .catch(
              function (err) {
                // Driver should throw user friendly errors
                speech.say(err)
              }
            )
          } else {
            // Don't do anything
          }
        })
        return true // Only fire one trigger

      case 'kodi_reboot' :
        // Confirm whether to reboot
        Homey.manager('speech-input').confirm(__('question.confirm_reboot'), function (err, confirmed) {
          if (err) {
            speech.say(__('talkback.something_went_wrong') + ' ' + err)
          } else if (confirmed) {
            // Reboot Kodi
            Homey.manager('drivers').getDriver('kodi').rebootKodi(null)
            .catch(
              function (err) {
                // Driver should throw user friendly errors
                speech.say(err)
              }
            )
          } else {
            // Don't do anything
          }
        })
        return true // Only fire trigger

      case 'kodi_shutdown' :
        // Confirm whether to reboot
        Homey.manager('speech-input').confirm(__('question.confirm_shutdown'), function (err, confirmed) {
          if (err) {
            speech.say(__('talkback.something_went_wrong') + ' ' + err)
          } else if (confirmed) {
            // Reboot Kodi
            Homey.manager('drivers').getDriver('kodi').shutdownKodi(null)
            .catch(
              function (err) {
                // Driver should throw user friendly errors
                speech.say(err)
              }
            )
          } else {
            // Don't do anything
          }
        })
        return true // Only fire trigger

      case 'kodi_start_addon' :
        // Parse the addon title from speech transcript
        var addon = speech.transcript.replace(trigger.text, '')

        // Try to lookup the movie
        // NOTE:	no multiple device support yet, pass null as device so 1st registered device gets picked
        searchAndStartAddon(null, addon).catch(
          function (err) {
            // Driver should throw user friendly errors
            speech.say(err)
          }
        )

        return true // Only fire trigger

      case 'kodi_new_movies' :
        // Get the setting for # of days to looks back
        let daysSince = Homey.manager('settings').get('days_since')
        // Use default value when no proper setting is found
        if (!Utils.isNumeric(daysSince)) {
          daysSince = 7
        }
        // Try to look up any new movies
        Homey.manager('drivers').getDriver('kodi').getNewestMovies(null, daysSince)
          .then(function (movies) {
            speech.say(__('talkback.found_following_movies', { 'days_since': daysSince }))
            movies.forEach(function (movie) {
              speech.say(movie.label)
            })
          })
          .catch(
            function (err) {
              console.log('error', err)
              // Driver should throw user friendly errors
              speech.say(err)
            }
          )

        return true // Only fire trigger

      case 'kodi_new_episodes' :
        // Get the setting for # of days to looks back
        let daysSinceEpisode = Homey.manager('settings').get('days_since')
        // Use default value when no proper setting is found
        if (!Utils.isNumeric(daysSinceEpisode)) {
          daysSinceEpisode = 7
        }
        // Try to look up any new movies
        Homey.manager('drivers').getDriver('kodi').getNewestEpisodes(null, daysSinceEpisode)
          .then(function (episodes) {
            speech.say(__('talkback.found_following_episodes', { 'days_since': daysSinceEpisode }))
            episodes.forEach(function (episode) {
              speech.say(__('talkback.found_episode', {
                'showtitle': episode.showtitle,
                'season': episode.season,
                'episode': episode.episode,
                'episode_title': episode.title
              }))
            })
          })
          .catch(
            function (err) {
              console.log('error', err)
              // Driver should throw user friendly errors
              speech.say(err)
            }
          )

        return true // Only fire trigger
    }
  })

  callback(null, true)
}

/* ******************
	FLOW ACTIONS / TRIGGER FUNCTIONS
********************/
function onFlowActionPlayMovieKodi (callback, args) {
  Homey.log('onFlowActionPlayMovieKodi', args)
  searchAndPlayMovie(args.kodi.id, args.movie_title)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionPauseResumeKodi (callback, args) {
  Homey.log('onFlowActionPauseResumeKodi()', args)
  Homey.manager('drivers').getDriver('kodi').playPause(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionStopKodi (callback, args) {
  Homey.log('onFlowActionStopKodi()', args)
  Homey.manager('drivers').getDriver('kodi').stop(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionPlayLatestEpisode (callback, args) {
  Homey.log('onFlowActionPlayLatestEpisode()', args)
  playLatestEpisode(args.kodi.id, args.series_title)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionHibernate (callback, args) {
  Homey.log('onFlowActionHibernate()', args)
  Homey.manager('drivers').getDriver('kodi').hibernateKodi(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionReboot (callback, args) {
  Homey.log('onFlowActionReboot()', args)
  Homey.manager('drivers').getDriver('kodi').rebootKodi(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionShutdown (callback, args) {
  Homey.log('onFlowActionShutdown()', args)
  Homey.manager('drivers').getDriver('kodi').shutdownKodi(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionPlayMusicByArtist (callback, args) {
  Homey.log('onFlowActionPlayMusicByArtist()', args)
  searchAndPlayMusic(args.kodi.id, 'ARTIST', args.artist)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionMuteKodi (callback, args) {
  Homey.log('onFlowActionMuteKodi()', args)
  Homey.manager('drivers').getDriver('kodi').muteKodi(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionUnmuteKodi (callback, args) {
  Homey.log('onFlowActionMuteKodi()', args)
  Homey.manager('drivers').getDriver('kodi').unmuteKodi(args.kodi.id)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionSubtitleOn (callback, args) {
  Homey.log('onFlowActionSubtitleOn()', args)
  Homey.manager('drivers').getDriver('kodi').setSubtitle(args.kodi.id, 'on')
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionSubtitleOff (callback, args) {
  Homey.log('onFlowActionSubtitleOff()', args)
  Homey.manager('drivers').getDriver('kodi').setSubtitle(args.kodi.id, 'off')
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionSetPartyMode (callback, args) {
  Homey.log('onFlowActionSetPartyMode()', args)
  Homey.manager('drivers').getDriver('kodi').setPartyMode(args.kodi.id, args.onoff)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}

function onFlowActionSetVolume (callback, args) {
  Homey.log('onFlowActionSetVolume()', args)
  Homey.manager('drivers').getDriver('kodi').setVolume(args.kodi.id, args.volume)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}
function onFlowActionKODICommand (callback, args) {
  Homey.log('onFlowActionKODICommand()', args)
  Homey.manager('drivers').getDriver('kodi').setKODICommand(args.kodi.id, args.KODICommand)
    .then(function () { callback(null, true) })
    .catch(function (error) { callback(error) })
}
/* ******************
	COMMON FUNCTIONS
********************/
function searchAndPlayMovie (device, movieTitle) {
  return new Promise(function (resolve, reject) {
    Homey.log('searchAndPlayMovie', device, movieTitle)

    // Get device from driver and play the movie
    var KodiDriver = Homey.manager('drivers').getDriver('kodi')

    KodiDriver.searchMovie(device, movieTitle)
      .then(
        // Play movie and trigger flows
        function (movie) {
          KodiDriver.playMovie(device, movie.movieid)
          resolve()
        }
    )
    .catch(reject)
  })
}

function searchAndStartAddon (device, addon) {
  return new Promise(function (resolve, reject) {
    Homey.log('searchAndStartAddon', device, addon)

    // Get device from driver and play the movie
    var KodiDriver = Homey.manager('drivers').getDriver('kodi')

    KodiDriver.searchAddon(device, addon)
      .then(
        // Start the addon
        function (addon) {
          KodiDriver.startAddon(device, addon.addonid)
          resolve()
        }
    )
    .catch(reject)
  })
}

// queryProperty can be ARTIST or ALBUM
function searchAndPlayMusic (device, queryProperty, searchQuery) {
  return new Promise(function (resolve, reject) {
    Homey.log('searchAndPlayMusic()', device, queryProperty, searchQuery)
    // Get the device from driver and search for music
    var KodiDriver = Homey.manager('drivers').getDriver('kodi')
    KodiDriver.searchMusic(device, queryProperty, searchQuery)
      .then(
        function (songsToPlay) {
          KodiDriver.playMusic(device, songsToPlay, true)
          resolve()
        }
      )
      .catch(reject)
  })
}

function playLatestEpisode (device, seriesName) {
  return new Promise(function (resolve, reject) {
    Homey.log('playLatestEpisode()', device, seriesName)
    // Get the device from driver and search for the latest episode of the series
    var KodiDriver = Homey.manager('drivers').getDriver('kodi')
    KodiDriver.getLatestEpisode(device, seriesName)
      .then(
        function (episodeToPlay) {
          KodiDriver.playEpisode(device, episodeToPlay)
          resolve()
        }
      )
      .catch(reject)
  })
}
