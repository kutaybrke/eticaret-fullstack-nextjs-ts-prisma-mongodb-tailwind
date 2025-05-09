import React from 'react'

const TextClip = (text: string) => {
    if (text.length < 15) return text
    return text.substring(0, 15) + "..."
}

export default TextClip