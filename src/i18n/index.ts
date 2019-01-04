import { addLocaleData } from 'react-intl'

import * as enLocaleData from 'react-intl/locale-data/en'
import * as beLocaleData from 'react-intl/locale-data/be'
import { LocaleTypes } from './localeTypes'

import enTranslation from './en'
import beTranslation from './be'

addLocaleData(enLocaleData)
addLocaleData(beLocaleData)

const DEFAULT_LOCALE = LocaleTypes.EN.toString()

export const formatTranslationMessages = (locale: string, messages: any):any => {
  const defaultFormattedMessages: any= locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslation)
    : {}

    return Object.keys(messages).reduce((formattedMessage, key) => {
      const formattedMsg = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      :messages[key]
      return Object.assign(formattedMessage, { [key]: formattedMsg })
    }, {})
}

export const translationMessages: any = {
  en: formatTranslationMessages(LocaleTypes.EN.toString(), enTranslation),
  be: formatTranslationMessages(LocaleTypes.BE.toString(), beTranslation)
}