---
outline: deep
---

# Компоненты

Библиотека Chotto организована по атомарной архитектуре: от простых атомов и иконок до контейнеров и макетов. Ниже собраны основные группы компонентов из `src/components`, их назначение и типичные сценарии применения.

## 1. Атомы
- [`ButtonContextMenu`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-buttoncontextmenu--docs) — кнопка-триггер для контекстного меню.
- [`ContextMenu`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-contextmenu--docs) — базовое выпадающее меню с произвольными действиями.
- [`EmbedPreview`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-embedpreview--docs) — карточка для превью встраиваемого контента.
- [`LinkPreview`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-linkpreview--docs) — карточка предпросмотра ссылок.
- [`Tooltip`](https://mobilon-dev.github.io/chotto/?path=/docs/atoms-tooltip--docs) — всплывающая подсказка с гибкой позицией.

## 2. Блоки
- [`CommunicationPanel`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-communicationpanel--docs) — панель коммуникации с фильтрами и действиями.
- [`FeedFoundItem`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedfounditem--docs), [`FeedFoundObjects`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedfoundobjects--docs) — результаты поиска по ленте.
- [`FeedSearch`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-feedsearch--docs) — строка поиска с подсветкой совпадений.

## 3. Элементы ввода сообщения
- [`ButtonCommandsSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttoncommandsselector--docs), [`ButtonEmojiPicker`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttonemojipicker--docs) — кнопки для выбора команд и эмодзи.
- [`ButtonTemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttontemplateselector--docs), [`ButtonWabaTemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-buttonwabatemplateselector--docs) — выбор стандартных и WABA-шаблонов.
- [`FilePreview`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-filepreview--docs), [`FileUploader`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-fileuploader--docs) — предпросмотр и загрузка вложений.
- [`TemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-templateselector--docs) — вспомогательный компоненты при сборке шаблонов.
- [`WABAAttachmentSection`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaattachmentsection--docs), [`WABAQuickReplyButtons`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaquickreplybuttons--docs), [`WABASeparatedQuickButtons`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabaseparatedquickbuttons--docs), [`WABATemplateSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-input-elements-wabatemplateselector--docs) — специализированные элементы для WhatsApp Business API.

## 4. Элементы списка чатов
- [`ChatFilter`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chatfilter--docs) — фильтрация и поиск по чатам.
- [`ChatItem`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chatitem--docs) — карточка чата с индикаторами активности.
- [`ChatTabs`](https://mobilon-dev.github.io/chotto/?path=/docs/chat-list-elements-chattabs--docs) — переключение между наборами чатов.

## 5. Универсальные элементы
- [`AudioRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-audiorecorder--docs), [`VideoRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-videorecorder--docs) — запись аудио и видео.
- [`ChannelSelector`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-channelselector--docs), [`ThemeMode`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-thememode--docs) — выбор канала общения и темы оформления.
- [`ChatInfo`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatinfo--docs), [`ChatPanel`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatpanel--docs), [`UserProfile`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-userprofile--docs), [`ContactInfo`](https://mobilon-dev.github.io/chotto/?path=/docs/elements-contactinfo--docs) — информеры и сайд-панели.

## 6. Элементы ленты сообщений
- Основные сообщения: [`TextMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-textmessage--docs), [`ImageMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-imagemessage--docs), [`VideoMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-videomessage--docs), [`AudioMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-audiomessage--docs), [`FileMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-filemessage--docs), [`StickerMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-stickermessage--docs).
- Служебные сообщения: [`SystemMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-systemmessage--docs), [`DateMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-datemessage--docs), [`DateMessageSticky`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-datemessagesticky--docs), [`TypingMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-typingmessage--docs).
- Ответы: [`BaseReplyMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-basereplymessage--docs), [`ReplyTextMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replytextmessage--docs), [`ReplyImageMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyimagemessage--docs), [`ReplyVideoMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyvideomessage--docs), [`ReplyAudioMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyaudiomessage--docs), [`ReplyFileMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replyfilemessage--docs), [`ReplyStickerMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replystickermessage--docs), [`ReplyCallMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-replycallmessage--docs).
- Интерактив: [`MessageKeyboard`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-messagekeyboard--docs), [`FeedKeyboard`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-feedkeyboard--docs), [`MessageReactions`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-messagereactions--docs).
- Дополнительно: [`CallMessage`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-callmessage--docs), [`SplashScreen`](https://mobilon-dev.github.io/chotto/?path=/docs/feed-elements-splashscreen--docs).

## 7. Модальные окна
- [`Modal`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modal--docs), [`ModalFullscreen`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalfullscreen--docs), [`ModalNoFooter`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalnofooter--docs) — базовые модальные оболочки.
- [`SelectUser`](https://mobilon-dev.github.io/chotto/?path=/docs/blocks-selectuser--docs), [`CreateChat`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-createchat--docs), [`CreateDialog`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-createdialog--docs), [`ModalVideoRecorder`](https://mobilon-dev.github.io/chotto/?path=/docs/modals-modalvideorecorder--docs) — модальные окна для управления чатами и медиа. Часть из них подгружается динамически для оптимизации бандла.

## 8. Составные компоненты
- [`ChatInput`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs) — высокоуровневая панель ввода сообщения.
- [`ChatList`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatlist--docs) — список чатов с фильтрами и индикаторами.
- [`Feed`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs) — основная лента сообщений с поддержкой разных типов содержимого.
- [`SideBar`](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-sidebar--docs) — боковая панель с комбинированным содержимым.

## 9. Макеты и обёртки
- [`BaseLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-baselayout--docs), [`ExtendedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-extendedlayout--docs), [`AdaptiveExtendedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-adaptiveextendedlayout--docs) — стандартные варианты раскладки (2–3 колонки).
- [`FeedLayout`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-feedlayout--docs) — однооконный макет для фокусировки на ленте.
- [`ChatWrapper`](https://mobilon-dev.github.io/chotto/?path=/docs/layouts-chatwrapper--docs) — расширение для подключения дополнительной панели в макетах.

## 10. Контейнеры
- [`BaseContainer`](https://mobilon-dev.github.io/chotto/?path=/docs/containers-basecontainer--docs) — фиксированный контейнер, встраиваемый в страницу.
- [`FloatContainer`](https://mobilon-dev.github.io/chotto/?path=/docs/containers-floatcontainer--docs) — плавающий контейнер-виджет с заголовком и элементами управления.

## Где посмотреть вживую
Актуальные примеры, визуальные состояния и входные данные доступны в [Storybook](https://mobilon-dev.github.io/chotto/). Там же можно изучить вариации тем и поведения компонентов. 