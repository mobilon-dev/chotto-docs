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

## 0.3.10  

 Storybook structure
  - Fixed component display structure in Storybook
  - Added correct titles for all categories (Atoms, Blocks, Compounds, etc.)

 Component relocation
  - `PlaceholderComponent` moved from `5_containers` to `2_chatinput_elements`
  - `SplashScreen` moved from `5_containers` to `2_feed_elements`

 Story creation
  - Added stories for all components in `5_containers` (BaseContainer, FloatContainer)
  - Added stories for all components in `4_layouts` (BaseLayout, ChatWrapper, FeedLayout, ExtendedLayout, AdaptiveExtendedLayout)
  - Added stories for SplashScreen

 Import fixes
  - Fixed incorrect paths to ThemeMode component
  - Fixed imports in FileUploader.stories.ts
  - Fixed Story types in ContactInfo.stories.ts

 Linter
  - Commented out unused variables in MobilonExtendedChatApp.vue
  - Fixed parsing errors in story files

 Architecture
  - Updated theme structure (added global.scss)
  - Reorganized theme validators in scripts/validators/

## 0.3.11

  Hook reorganization
  - Moved `playNotificationAudio` and `insertDaySeparators` from `apps/helpers` to `hooks`
  - Updated imports in all applications:
    - BaseAdaptiveExtendedChatApp
    - BaseBaseChatApp
    - BaseExtendedChatApp
    - BaseFeedChatApp
    - FloatExtendedChatApp
    - MobilonExtendedChatApp

  Import unification
  - Introduced uniform import style through aliases `@/components`, `@/types`, `@/hooks`
  - Affected all component levels:
    - Atoms (1_atoms)
    - Blocks (2_blocks)
    - Elements (2_elements, 2_chatinput_elements, 2_feed_elements)
    - Compound components (3_compounds)

  Type centralization
  - Types moved closer to components where they are used
  - Created unified index file for exporting types from `src/types/index.ts`
  - Component types organized in:
    - `2_feed_elements/types/`
    - `3_compounds/ChatInput/types/`

  Component export centralization
  - Removed separate `index.ts` files from each component category
  - Created unified `components/index.ts` for exporting all components

## 0.3.12

  Refactoring and improvements

  Code organization:
  - Moved modal dialogs to hooks (useCreateChat, useCreateChat2, useCreateDialog, useModalSelectUser2)
  - Simple functions moved from hooks to /functions (sortByTimestamp, formatTimestamp, getStatusMessage, etc)
  - Theme list moved to data
  - Removed /apps/helpers folder (functionality moved to hooks and functions)

  Validation:
  - Added reactive chat validator (outputs problem report to console)
  - Added message validator
  - Added sidebar items validator

  Documentation:
  - Added JSDoc for functions
  - Added documentation for useMessage hook

  Build optimization (current changes):
  - Removed static exports for dynamically loaded components (SelectUser2, CreateChat, CreateChat2, CreateDialog)
  - Fixed Vite warnings about conflicts between static and dynamic imports
  - Modal components now load only on demand (code splitting works correctly)

## 0.3.13

  Removed extChatAppId
  - Removed redundant extChatAppId prop from containers

  Consolidated modal dialog hooks
  - Moved useModal.ts and useVideoRecorder.ts to /hooks/modals/
  - Cleaned up exports, created TODO.md

  Moved validators to hooks, exported
  - Validators: /apps/validators/ → /hooks/validators/
  - Fixed ChatList → ChatsArray type conflict

  Changed imports
  - All imports through @/components (uniformity)

## 0.3.15

  Dependencies:
  Updated package.json and package-lock.json

  Modal window components (2_modals):
  - CreateChat2: significant functionality expansion, complete theme system for all 4 themes, new style types
  - Modal: style refactoring (168 lines changed), theme system update for all variants
  - SelectUser/SelectUser2: moved from 2_blocks to 2_modals

  Applications:
  - MobilonExtendedChatApp: added new functionality (+48 lines)

  Themes:
  - Updated component imports in all 4 themes (dark, default, green, mobilon1)
  - Changes in green/vars.scss

  Chat lists:
  - ChatList: new capabilities, updated README (+10 lines of documentation)

  Hooks:
  - Optimized useModal.ts (+21 lines)
  - Updated useModalSelectUser2.ts

  Build:
  - components/index.ts: removed static imports of 5 modal windows for code-splitting optimization

## 0.3.17

  New features in ChatList:
  - Search filter (ChatFilter) - added chat filtering component
  - Tab filtering (ChatTabs) - added ability to filter by tabs
  - Updated styles and themes for new components

  ChatList improvements:
  - Updated ChatList.vue component logic
  - Added new styles and themes (dark, default, green, mobilon1)
  - Updated README documentation

  Data updates:
  - Changes in src/apps/data/chats.ts
  - Updated MobilonExtendedChatApp.vue

## 0.3.18

  Removed excessive logging
  - Removed all console.log from ChatList.vue component
  - Removed watchers for tracking props changes
  - Cleaned code from debug information

  Changed validation conditions:

  - chatId must now be a string (was a number)
  - lastActivity.timestamp must now be a number (was a string)
  - Added check for existence of contact.attributes before validation
  - chatId is now optional field, but if present - must be a string
  - Added exceptions for system messages of type "system.date"
  - For system messages messageId and timestamp became optional

## 0.3.19

  - ButtonEmojiPicker - added support for click and hover modes
  - Fixed issue with default background image import

## 0.3.20

  New features:
  - useValidation - added new hook with validator selection
  - ChatList - added ability to set chat list title via prop

  Fixes:
  - Removed unused storybook for Tooltip

  Feed component refactoring:
  - Extracted logic into 9 new composables:
  - useFeedScrollTo - scroll to message
  - useFeedLoadMore - load more messages
  - useFeedKeyboard - keyboard handling
  - useFeedReply - reply handling
  - useFeedComponents - component mapping
  - useFeedMessageVisibility - visibility tracking
  - useFeedGrouping - message grouping
  - useFeedButton - button logic
  - useStickyDate - sticky dates

## 0.3.21

  New functionality:
  - Added pending and error statuses for messages (#13725)
  - Added hooks: useMessageActions, useMessageLinks for working with messages (#13556)
  - Added getMessageClass function for message components

  Refactoring:
  - useMessage renamed to useMessageDraft
  - useMessageActions and useMessageLinks moved to hooks\messages

  Storybook:
  - Updated stories for 13 components (SystemMessage, SplashScreen, Reply, DateMessageSticky, ContactInfo, ChannelSelector, ButtonEmojiPicker, FeedKeyboard, TextMessage)
  - Added theme support in Tooltip with new positioning examples
  - Fixed typing in SplashScreen.stories.ts

## 0.3.22

  New functionality:
  - Added pending and error statuses for messages
  - Added hooks useMessageActions and useMessageLinks for working with messages
  - Added getMessageClass function for message components

  Refactoring:
  - useMessage renamed to useMessageDraft
  - useMessageActions and useMessageLinks moved to hooks\messages

  Storybook:
  - Updated stories for 13 components (SystemMessage, SplashScreen, Reply*, DateMessageSticky, ContactInfo, ChannelSelector, ButtonEmojiPicker, FeedKeyboard, TextMessage)
  - Added theme support in Tooltip with new positioning examples
  - Fixed typing in SplashScreen.stories.ts

## 0.3.23

  - MessageReactions: added component for message reactions
  - storybook: added MessageReactions component to storybook
  - StickerMessage: fixed warning, added missing source map files

## 0.3.24

  - MessageReactions, Feed: added prop for controlling reaction visibility in messages
  - storybook: added BasicChatExample chat example
  - stories: added reaction examples for different message types in MessageReactions
  - stories: Feed and TextMessage optimization

