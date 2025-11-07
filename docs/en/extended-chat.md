---
outline: deep
---


# Three Column Chat

A chat with this layout can accommodate the largest number of components. Since the first and second columns adapt to the width of their content, striving for a minimum, it makes sense to place various additional components in them. The remaining third column can accommodate the main chat component.

In the example below:
- the first column contains a [SideBar](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-sidebar--docs) with buttons for quick access to chats (other options are possible);\
 at the bottom [ThemeMode](https://mobilon-dev.github.io/chotto/?path=/docs/elements-thememode--docs) - selector for choosing a customizable chat theme
- the second column contains a [UserProfile](https://mobilon-dev.github.io/chotto/?path=/docs/elements-userprofile--docs) block with main information about the current user;\
 the remaining space is occupied by the chat list [ChatList](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatlist--docs), including search among chats
- the third column contains the chat information block [ChatInfo](https://mobilon-dev.github.io/chotto/?path=/docs/elements-chatinfo--docs);\
 chat body with messages [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs);\
 message input field [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs);\
 various button objects with additional actions (file upload, emoji selection, template usage, communication channel selection).

<img src="/extended_new.png" alt="Изображение" class="image-with-shadow-extended" />

<style>
.image-with-shadow-extended {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.dark .image-with-shadow-extended {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15), 
              0 2px 6px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>

## Code Structure of Typical Chat in Extended Layout

```vue
<template>
  <BaseContainer>
    <ExtendedLayout>

      <template #first-col>
        <SideBar />
        <ThemeMode />
      </template>

      <template #second-col>
        <UserProfile />
        <ChatList />
        <!--Search can be placed in the second column-->
        <FeedSearch />
        <FeedFoundObjects/>
      </template>

      <template #third-col>
        <chat-wrapper >

          <template #default>
            <ChatInfo>
              <template #actions>
                <!--Your triggers for various events-->
              </template>
            </ChatInfo>
            <!--Search can also be placed in the third column-->
            <FeedSearch />
            <FeedFoundObjects />
            <Feed />
            <ChatInput >
              <template #buttons>
                <FileUploader />
                <ButtonEmojiPicker />
                <ButtonTemplateSelector />
                <ButtonWabaTemplateSelector />
                <ChannelSelector />
                <!--Additional elements possible-->
              </template>
            </ChatInput>
          </template>

          <template #chatpanel>
            <ChatPanel>
              <template #content>
                <!--Your content in the side panel-->  
              </template>
            </ChatPanel>
          </template>

        </chat-wrapper>
      </template>

    </ExtendedLayout>
  </BaseContainer>
</template>
```

