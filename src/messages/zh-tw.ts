import type { Messages } from '~/libs/i18n'

const zhTW: Messages = {
  common: {
    'submit': '發送',
    'submit-loading': '發送中...',
    'submit-success': '發送成功',
    'submit-error': '發送失敗',
    'save': '儲存',
    'save-loading': '儲存中...',
    'save-success': '儲存成功',
    'save-error': '儲存失敗',
  },
  sidebar: {
    'appearance': '外觀',
    'theme': '主題',
    'light': '淺色',
    'dark': '深色',
    'system': '系統',
    'language': '語言',
    'sign-in-to-your-account': '登入您的帳戶',
  },
  navigation: {
    'home': '首頁',
    'playground': '實驗室',
    'authentication': '身分驗證',
    'sign-in': '登入頁面',
    'sign-up': '註冊頁面',
    'user': '受保護的用戶頁面',
    'profile': '個人檔案',
    'account-settings': '帳戶設置',
    'change-password': '更改密碼',
    'admin': '受保護的管理員頁面',
    'dashboard': '儀表板',
    'user-management': '用戶管理',
  },
  auth: {
    'name': '名稱',
    'email': '信箱',
    'username': '帳號',
    'password': '密碼',
    'password-confirm': '確認密碼',
    'current-password': '目前密碼',
    'new-password': '新密碼',
    'new-password-confirm': '確認新密碼',
    'sign-up': '註冊',
    'sign-up-description': '請輸入以下資訊來註冊',
    'sign-up-loading': '註冊中...',
    'sign-up-success': '註冊成功',
    'sign-up-error': '註冊失敗',
    'sign-in': '登入',
    'sign-in-description': '請輸入您的帳號和密碼',
    'sign-in-loading': '登入中...',
    'sign-in-success': '登入成功',
    'sign-in-error': '登入失敗',
    'sign-out': '登出',
    'sign-out-loading': '登出中...',
    'sign-out-success': '登出成功',
    'sign-out-error': '登出失敗',
    'or': '或是',
    'sign-in-social': '使用 {name} 登入',
    'dont-have-an-account': '還沒有帳號嗎?',
    'already-have-an-account': '已經有帳號了嗎?',
    'already-authenticated-redirecting': '用戶已經登入，正在重新導向 ...',
    'authentication-failed': '身分驗證失敗',
    'unauthorized-access': '未授權的存取',
    'name-description': '您的名稱用於顯示',
    'name-min': '名稱至少需要 {min} 個字元',
    'name-max': '名稱不能超過 {max} 個字元',
    'email-description': '您的信箱用於帳號復原',
    'email-info': '我們不會與任何人分享您的信箱',
    'email-invalid': '無效的信箱',
    'username-description': '您的帳號用於身分驗證',
    'username-regex': '帳號只能包含小寫字母、數字、底線或中線且必須為小寫',
    'username-min': '帳號至少需要 {min} 個字元',
    'username-max': '帳號不能超過 {max} 個字元',
    'password-one-uppercase-regex': '密碼必須包含至少一個大寫字母',
    'password-one-lowercase-regex': '密碼必須包含至少一個小寫字母',
    'password-one-number-regex': '密碼必須包含至少一個數字',
    'password-one-special-regex': '密碼必須包含至少一個特殊字元',
    'password-min': '密碼至少需要 {min} 個字元',
    'password-max': '密碼不能超過 {max} 個字元',
    'password-must-match': '密碼必須匹配',
    'password-must-different': '新密碼必須不同於目前密碼',
  },
}

export default zhTW
