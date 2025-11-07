---
outline: deep
---


# Two Column Chat

A chat interface consisting of two columns is a compromise between one and three columns. On one hand, it provides the opportunity to significantly expand the application functionality, while on the other hand, the application interface can be kept slightly more compact. Columns in Base Layout occupy space in a 30%/70% ratio, so it makes sense to place the most important components in the second column. Interfaces of this nature can find application as a basis for lightweight messenger applications for all those people who, either by profession or for other reasons, often interact with many different people (for example, a manager and clients).

The example below shows a two-column chat interface where:

- the first column contains a [UserProfile](https://mobilon-dev.github.io/chotto/?path=/docs/library-components-userprofile--docs) block with main information about the current user;\
 the remaining space is occupied by the chat list [ChatList](https://mobilon-dev.github.io/chotto/?path=/docs/library-components-chatlist--docs), including search among chats
- the second column contains the chat information block [ChatInfo](https://mobilon-dev.github.io/chotto/?path=/docs/library-components-chatinfo--docs);\
 chat body with messages [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/library-components-feed--docs);\
 message input field [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/library-components-chatinput--docs);\
 various button objects with additional actions (file upload, emoji selection, template usage, communication channel selection).

![Image](/base.png)

## Code Structure of Typical Chat in Base Layout

``` vue
<template>
  <FloatContainer>
    <BaseLayout>

      <template #first-col>
        <UserProfile />
        <ChatList />
        <FeedSearch />
        <FeedFoundObjects />
        <ThemeMode />
      </template>

      <template #second-col>
        <chat-wrapper>
          <template #default>
            <ChatInfo>
              <template #actions>
                <!--Your triggers for various events-->
              </template>
            </ChatInfo> 
              
            <Feed />
            <ChatInput>
              <template #buttons>
                <FileUploader/>
                <ButtonEmojiPicker />
                <ButtonTemplateSelector />
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

    </BaseLayout>
  </FloatContainer>
</template>
```

