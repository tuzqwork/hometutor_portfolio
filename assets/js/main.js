// Add this code at the end of main.js

/*=============== CHATBOT ===============*/
const chatbotButton = document.querySelector('.chatbot__button'),
      chatbotContainer = document.querySelector('.chatbot__container'),
      chatbotClose = document.querySelector('.chatbot__close'),
      chatbotInput = document.querySelector('.chatbot__input'),
      chatbotMessages = document.querySelector('.chatbot__messages')

// Toggle chatbot
chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.add('show-chat')
})

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('show-chat')
})

// Simple chatbot responses
const responses = {
    'hello': 'Xin chào! Tôi có thể giúp gì cho bạn?',
    'hi': 'Xin chào! Tôi có thể giúp gì cho bạn?',
    'fee': 'Học phí của tôi là 200.000đ/giờ cho môn Toán và Hóa.',
    'time': 'Tôi có thể dạy vào các buổi tối trong tuần và cả ngày cuối tuần.',
    'subject': 'Tôi dạy môn Toán và Hóa cho học sinh cấp 2 và cấp 3.',
    'contact': 'Bạn có thể liên hệ với tôi qua email tuzqwork@gmail.com hoặc Facebook.'
}

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
        // Add user message
        const userMessage = document.createElement('div')
        userMessage.className = 'chatbot__message user'
        userMessage.textContent = chatbotInput.value
        chatbotMessages.appendChild(userMessage)

        // Add bot response
        setTimeout(() => {
            const botMessage = document.createElement('div')
            botMessage.className = 'chatbot__message'
            
            // Check for keywords in the user's message
            const userInput = chatbotInput.value.toLowerCase()
            let response = 'Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi về học phí, thời gian học hoặc môn học.'
            
            for (const [key, value] of Object.entries(responses)) {
                if (userInput.includes(key)) {
                    response = value
                    break
                }
            }
            
            botMessage.textContent = response
            chatbotMessages.appendChild(botMessage)
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight
        }, 500)

        // Clear input
        chatbotInput.value = ''
    }
})