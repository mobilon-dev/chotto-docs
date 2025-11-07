---
outline: deep
---

# Components

The Chotto library is organized according to atomic architecture: from simple atoms and icons to containers and layouts. Below are the main component groups from `src/components`, their purpose and typical use cases.

## 1. Atoms
- [`ButtonContextMenu`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-buttoncontextmenu--docs) — button trigger for context menu.
- [`ContextMenu`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-contextmenu--docs) — basic dropdown menu with arbitrary actions.
- [`EmbedPreview`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-embedpreview--docs) — card for embeddable content preview.
- [`LinkPreview`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-linkpreview--docs) — link preview card.
- [`Tooltip`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-tooltip--docs) — popup tooltip with flexible position.

## 2. Blocks
- [`CommunicationPanel`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-communicationpanel--docs) — communication panel with filters and actions.
- [`FeedFoundItem`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedfounditem--docs), [`FeedFoundObjects`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedfoundobjects--docs) — feed search results.
- [`FeedSearch`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedsearch--docs) — search bar with match highlighting.

## 3. Message Input Elements
- [`ButtonCommandsSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttoncommandsselector--docs), [`ButtonEmojiPicker`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttonemojipicker--docs) — buttons for selecting commands and emoji.
- [`ButtonTemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttontemplateselector--docs), [`ButtonWabaTemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttonwabatemplateselector--docs) — selection of standard and WABA templates.
- [`FilePreview`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-filepreview--docs), [`FileUploader`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-fileuploader--docs) — preview and upload of attachments.
- [`TemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-templateselector--docs) — helper component when building templates.
- [`WABAAttachmentSection`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaattachmentsection--docs), [`WABAQuickReplyButtons`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaquickreplybuttons--docs), [`WABASeparatedQuickButtons`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaseparatedquickbuttons--docs), [`WABATemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabatemplateselector--docs) — specialized elements for WhatsApp Business API.

## 4. Chat List Elements
- [`ChatFilter`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chatfilter--docs) — filtering and searching chats.
- [`ChatItem`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chatitem--docs) — chat card with activity indicators.
- [`ChatTabs`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chattabs--docs) — switching between chat sets.

## 5. Universal Elements
- [`AudioRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-audiorecorder--docs), [`VideoRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-videorecorder--docs) — audio and video recording.
- [`ChannelSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-channelselector--docs), [`ThemeMode`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-thememode--docs) — communication channel and theme selection.
- [`ChatInfo`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatinfo--docs), [`ChatPanel`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatpanel--docs), [`UserProfile`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-userprofile--docs), [`ContactInfo`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-contactinfo--docs) — informers and side panels.

## 6. Message Feed Elements
- Main messages: [`TextMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-textmessage--docs), [`ImageMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-imagemessage--docs), [`VideoMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-videomessage--docs), [`AudioMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-audiomessage--docs), [`FileMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-filemessage--docs), [`StickerMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-stickermessage--docs).
- Service messages: [`SystemMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-systemmessage--docs), [`DateMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-datemessage--docs), [`DateMessageSticky`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-datemessagesticky--docs), [`TypingMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-typingmessage--docs).
- Replies: [`BaseReplyMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-basereplymessage--docs), [`ReplyTextMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replytextmessage--docs), [`ReplyImageMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyimagemessage--docs), [`ReplyVideoMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyvideomessage--docs), [`ReplyAudioMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyaudiomessage--docs), [`ReplyFileMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyfilemessage--docs), [`ReplyStickerMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replystickermessage--docs), [`ReplyCallMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replycallmessage--docs).
- Interactive: [`MessageKeyboard`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-messagekeyboard--docs), [`FeedKeyboard`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-feedkeyboard--docs), [`MessageReactions`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-messagereactions--docs).
- Additional: [`CallMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-callmessage--docs), [`SplashScreen`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-splashscreen--docs).

## 7. Modal Windows
- [`Modal`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modal--docs), [`ModalFullscreen`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalfullscreen--docs), [`ModalNoFooter`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalnofooter--docs) — basic modal wrappers.
- [`SelectUser`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-selectuser--docs), [`CreateChat`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-createchat--docs), [`CreateDialog`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-createdialog--docs), [`ModalVideoRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalvideorecorder--docs) — modal windows for managing chats and media. Some of them are loaded dynamically to optimize the bundle.

## 8. Compound Components
- [`ChatInput`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs) — high-level message input panel.
- [`ChatList`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatlist--docs) — chat list with filters and indicators.
- [`Feed`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs) — main message feed with support for different content types.
- [`SideBar`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-sidebar--docs) — side panel with combined content.

## 9. Layouts and Wrappers
- [`BaseLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-baselayout--docs), [`ExtendedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-extendedlayout--docs), [`AdaptiveExtendedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-adaptiveextendedlayout--docs) — standard layout options (2–3 columns).
- [`FeedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-feedlayout--docs) — single-window layout for focusing on the feed.
- [`ChatWrapper`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-chatwrapper--docs) — extension for connecting additional panel in layouts.

## 10. Containers
- [`BaseContainer`](https://mobilon-dev.github.io/chotto/?path=/docs/containers-basecontainer--docs) — fixed container embeddable in a page.
- [`FloatContainer`](https://mobilon-dev.github.io/chotto/?path=/docs/containers-floatcontainer--docs) — floating container widget with header and control elements.

## Where to See Live
Current examples, visual states and input data are available in [Storybook](https://mobilon-dev.github.io/chotto/). You can also explore theme variations and component behavior there.

