const DefaultAvatars = {
  BLURPLE: '6debd47ed13483642cf09e832ed0bc1b',
  GREY: '322c936a8c8be1b803cd94861bdfa868',
  GREEN: 'dd4dbc0016779df1378e7812eabaa04d',
  ORANGE: '0e291f67c9274a1abdddeb3fd919cbaa',
  RED: '1cbd08c76f8af6dddce02c5138971129'
}

function supportWebP () {
  const canvas = typeof document === 'object' ? document.createElement('canvas') : {}
  canvas.width = canvas.height = 1
  return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false
}

export default class User {
  constructor (data) {
    this.id = data.id
    this.username = data.username
    this.discriminator = data.discriminator
    this.avatar = data.avatar
    this.locale = data.locale
    this.mfaEnabled = data.mfa_enabled
  }

  get tag () {
    return `${this.username}#${this.discriminator}`
  }

  get avatarURL () {
    const imageExt = this.avatar.startsWith('a_') ? '.gif' : `${supportWebP() ? '.webp' : '.png'}?size=2048`
    return this.avatar ? `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}${imageExt}` : null
  }

  get defaultAvatarURL () {
    const avatars = Object.keys(DefaultAvatars)
    const avatar = avatars[this.discriminator % avatars.length]
    return `https://discordapp.com/assets/${DefaultAvatars[avatar]}.png`
  }

  get displayAvatarURL () {
    return this.avatarURL || this.defaultAvatarURL
  }
}
