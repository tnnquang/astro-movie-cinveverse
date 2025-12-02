import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.1,
});

export default NProgress;
