export const MESSAGES_SUBSCRIPTION = gql`
    subscription onNewMessage {
      newMessage {
        content
        author
      }
    }
  `