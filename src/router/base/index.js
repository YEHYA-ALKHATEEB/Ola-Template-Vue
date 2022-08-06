const base = {
  path: "",
  component: () => import("@/layouts/full-layout/FullLayout"),
  redirect: { name: "Homepage" },
  children: [
    {
      path: "",
      name: "Homepage",
      component: () => import("@/views/homepage/Homepage"),
      meta: {
        title: "HOMEPAGE",
        rule: "isPublic",
      },
    },
    {
      path: "/error/error-404",
      name: "Error404",
      component: () => import("@/views/error/Error404"),
      meta: {
        title: "ERROR_404",
        rule: "isPublic",
      },
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('@/views/login/Login'),
    //   meta: {
    //     title: 'LOGIN',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/register',
    //   name: 'Register',
    //   component: () => import('@/views/register/Register'),
    //   meta: {
    //     title: 'REGISTER',
    //     rule: 'isPublic'
    //   }
    // }
    // {
    //   path: '/forgot-password',
    //   name: 'ForgotPassword',
    //   component: () => import('@/views/forgot-password/ForgotPassword'),
    //   meta: {
    //     title: 'Forgot Password',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/reset-password',
    //   name: 'ResetPassword',
    //   component: () => import('@/views/reset-password/ResetPassword'),
    //   meta: {
    //     title: 'Reset Password',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/terms-and-conditions',
    //   name: 'TermsAndConditions',
    //   component: () => import('@/views/terms-and-conditions/TermsAndConditions'),
    //   meta: {
    //     title: 'Terms and Conditions',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/faq',
    //   name: 'FAQ',
    //   component: import('@/views/faq/FAQ'),
    //   meta: {
    //     title: 'FAQ',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/verify-email',
    //   name: 'VerifyEmail',
    //   component: () => import('@/views/homepage/VerifyEmail'),
    //   meta: {
    //     title: 'Verify Email',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/error/404',
    //   name: 'Error404',
    //   component: () => import('@/views/error/Error404'),
    //   meta: {
    //     title: 'ERROR_404',
    //     rule: 'isPublic'
    //   }
    // }, {
    //   path: '/error/403',
    //   name: 'Error403',
    //   component: () => import('@/views/error/Error403'),
    //   meta: {
    //     title: 'ERROR_403',
    //     rule: 'isPublic'
    //   }
    // }
  ],
};

export default base;
