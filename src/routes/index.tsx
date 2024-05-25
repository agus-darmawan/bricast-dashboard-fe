import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const NotAdminRedirect = lazy(
  () => import('@/components/layout/not-admin-redirect')
);
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const LoginPage = lazy(() => import('@/pages/auth/login'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/forgot-password'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const StudentPage = lazy(() => import('@/pages/students'));
const ZonesPage = lazy(() => import('@/pages/admin/masterdata/zones'));

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <NotAdminRedirect />
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'masterdata/zones',
          element: <ZonesPage />
        },
        {
          path: 'student',
          element: <StudentPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/register',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/login',
      element: <LoginPage />,
      index: true
    },
    {
      path: '/forgotPassword',
      element: <ForgotPasswordPage />,
      index: true
    },

    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
