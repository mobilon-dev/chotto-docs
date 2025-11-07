---
outline: deep
---


# Library Version Changes

Some key changes to library components must be taken into account when updating the version in your project: it is quite possible that an implementation that worked previously stops functioning correctly with a new version. To avoid such situations, it is recommended to track changes - this section of the documentation is organized to facilitate this process.

## 0.111

  ChatList Component
  - New property in props: titleEnabled: Boolean. titleEnabled enables display of the "Chats" title, default true.
  - New property in props: filterQuery: String. filterQuery replaces the internal variable for filtering chats by string, if filterEnabled = false and there is a need to place ChatFilter separately.
  - Removed action button next to the "Chats" title (plus button opening context menu) - instead of this button, a #actions slot is provided, into which you can inject, for example, a more relevant ButtonContextMenu component.

## 0.117

  ButtonContextMenu Component
  - Removed property in props: ButtonClass - was used to set the context menu trigger icon.
  - Removed property in props: ButtonTitle - was used to set arbitrary text for the context menu trigger.
  - Added #default slot - this slot sets the appearance of the context menu trigger.

## 0.121

  ChatInput Component
  - Added #inline-buttons slot - for placing action buttons in one row with the message text input field.
  - Removed command input functionality from component, separated into separate ButtonCommandsSelector component.

  ChatFilter Component
  - Added search icon in input field.

## 0.122

  - Added ReplyCallMessage component - new type of reply message
  - Changed reply message object, added fields:
    - header : string (header, e.g., message sender name, for all types of reply messages)
    - callDuration : string (call duration, for ReplyCallMessage) 
    - isMissedCall : boolean (whether call was missed, for ReplyCallMessage)

## 0.125

  - Added functionality for changing appearance of some components depending on condition - described in more detail [here](/en/user-styling.html)

## 0.126

  ChatInfo Component
  - Added #img-description slot - intended for placing icons and other images describing content, usually dialog content
  - New property in props: additionalTitle : String. When present, additional information highlighted with a colored border is displayed at the same level as the title.

## 0.129

  Added SplashScreen component - informational interactive placeholder in case of missing necessary information in some components.
  - Three slots integrated: #title, #text, #picture - intended for placing title, main information and some graphic or other object respectively.
  - action emit presented - reaction to click on #picture slot content for implementing interactive interaction with placeholder.

  ChatWrapper Component
  - Removed placeholder with text "Select a contact to start communication".
  - Added #placeholder slot for implementing custom placeholder (e.g., via SplashScreen).

  Feed Component
  - Added #empty-feed slot for implementing custom placeholder (e.g., via SplashScreen) in case of missing objects for visualization.

## 0.131

  Changes in ChatItem component behavior, nested in ChatList container.

  For dialog chat: 
  - click on chat card - removed additional effect related to opening/closing panel with dialogs, only emit select with argument {chat: Object, dialog: null} occurs.
  - click on icon for opening/closing additional information about dialogs - emit expand with argument of type Object containing chat entity fields is provided.
  - click on dialog - emit select with argument {chat: Object, dialog: Object} is left.

  For standard chat, the work scheme remains the same.

