# Get Started

This section describes the library installation process and a quick guide for further use.

## Requirements
- Node.js 18+
- Modern text editor and terminal (e.g., VS Code)
- Browser supporting modern JavaScript

## Installation

To install the library, enter in the command line:

> npm install @mobilon-dev/chotto

## Usage in Project

The Chotto library provides the following structure for building a chat:

```
.
└─ Container
   └─ Layout
      ├─ column N
      ├─ ...
      └─ column M
```

The main elements of the structure are:

- container (container wrapping the entire application)
  - base — static, embeddable in an existing page. Container content is provided through the `#default` slot.
  - float — as a dialog window. Container content is provided through the `#default` slot, additional control elements can be added to the window header through the `#controls` slot.
- layout (container layout by columns)
  - feed layout — one column for the entire container. The column is available through the `#default` slot.
  - base layout — two columns 30%/70%. Columns are available through slots `#first-col`, `#second-col`.
  - extended layout and adaptive extended — three columns. Columns are available through slots `#first-col`, `#second-col`, `#third-col`.

:::: tip May be useful
There is also a subtype of layout — `ChatWrapper`. If you need to add a side panel with additional information or actions, place `ChatWrapper` in one of the columns. The main part of the chat is rendered through the `#default` slot, the side panel — through the `#chatpanel` slot.
::::

## Quick Usage Example

```vue
<template>
  <div class="chat-app">
    <BaseContainer height="90vh" width="90vw">
      <ExtendedLayout>
        <template #first-col>
          <SideBar :sidebar-items="sidebarItems" />
          <ThemeMode :themes="themes" />
        </template>
        <template #second-col>
          <ChatList :chats="chats" @select="selectChat" />
        </template>
        <template #third-col>
          <ChatWrapper>
            <ChatInfo :chat="selectedChat" />
            <Feed :objects="messages" />
            <ChatInput @send="sendMessage" />
          </ChatWrapper>
        </template>
      </ExtendedLayout>
    </BaseContainer>
  </div>
</template>

<script setup>
import {
  BaseContainer,
  ExtendedLayout,
  SideBar,
  ChatList,
  ChatWrapper,
  ChatInfo,
  Feed,
  ChatInput,
  ThemeMode
} from '@mobilon-dev/chotto'

// Import main library styles:
import '@mobilon-dev/chotto/style.css'

// If you need a specific theme, you can import separately:
import '@mobilon-dev/chotto/themes/default.css'
import '@mobilon-dev/chotto/themes/dark.css'
import '@mobilon-dev/chotto/themes/green.css'
import '@mobilon-dev/chotto/themes/mobilon1.css'

// Your logic...
</script>

