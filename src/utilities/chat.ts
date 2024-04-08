export const formatMessage = (role: 'user' | 'assistant', userInput: string) => ({ role, content: userInput })
