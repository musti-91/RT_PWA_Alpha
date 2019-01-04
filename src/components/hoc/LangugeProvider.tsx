import React, { SFC } from 'react'
import { IntlProvider } from 'react-intl';

import { translationMessages } from '../../i18n/'

interface IProps {
  locale?: string
}

type initState = {
  locale: "en" | "be"
}

type Types = IProps & initState
const LanguageProvider: SFC<Types> = ({ children, locale }) => {
  return (
    <IntlProvider locale={locale} key={locale} messages={translationMessages[locale]}>
      {children}
    </IntlProvider>
  )
}



export default LanguageProvider