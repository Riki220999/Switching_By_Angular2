System.config({
    baseURL: '/dist/dev/ch8/ts/todo_webworkers/',
    map: {
        'rxjs': '/node_modules/rxjs',
        '@angular': '/node_modules/@angular'
    },
    paths: {
        bootstrap: '/dist/dev/bootstrap'
    },
    packages: {
        '@angular/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/common': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router-deprecated': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/http': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoOC90cy90b2RvX3dlYndvcmtlcnMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixPQUFPLEVBQUUsbUNBQW1DO0lBQzVDLEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsVUFBVSxFQUFFLHdCQUF3QjtLQUNyQztJQUNELEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxxQkFBcUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxVQUFVO1lBQ2hCLGdCQUFnQixFQUFFLElBQUk7U0FDdkI7UUFDRCwyQkFBMkIsRUFBRTtZQUMzQixJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCO1FBQ0QsbUNBQW1DLEVBQUU7WUFDbkMsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtRQUNELDRCQUE0QixFQUFFO1lBQzVCLElBQUksRUFBRSxVQUFVO1lBQ2hCLGdCQUFnQixFQUFFLElBQUk7U0FDdkI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCO1FBS0QsTUFBTSxFQUFFO1lBQ04sZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoOC90cy90b2RvX3dlYndvcmtlcnMvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtLmNvbmZpZyh7XHJcbiAgYmFzZVVSTDogJy9kaXN0L2Rldi9jaDgvdHMvdG9kb193ZWJ3b3JrZXJzLycsXHJcbiAgbWFwOiB7XHJcbiAgICAncnhqcyc6ICcvbm9kZV9tb2R1bGVzL3J4anMnLFxyXG4gICAgJ0Bhbmd1bGFyJzogJy9ub2RlX21vZHVsZXMvQGFuZ3VsYXInXHJcbiAgfSxcclxuICBwYXRoczoge1xyXG4gICAgYm9vdHN0cmFwOiAnL2Rpc3QvZGV2L2Jvb3RzdHJhcCdcclxuICB9LFxyXG4gIHBhY2thZ2VzOiB7XHJcbiAgICAnQGFuZ3VsYXIvY29yZSc6IHtcclxuICAgICAgbWFpbjogJ2luZGV4LmpzJyxcclxuICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgfSxcclxuICAgICdAYW5ndWxhci9jb21waWxlcic6IHtcclxuICAgICAgbWFpbjogJ2luZGV4LmpzJyxcclxuICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgfSxcclxuICAgICdAYW5ndWxhci9jb21tb24nOiB7XHJcbiAgICAgIG1haW46ICdpbmRleC5qcycsXHJcbiAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcclxuICAgIH0sXHJcbiAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6IHtcclxuICAgICAgbWFpbjogJ2luZGV4LmpzJyxcclxuICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgfSxcclxuICAgICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnOiB7XHJcbiAgICAgIG1haW46ICdpbmRleC5qcycsXHJcbiAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcclxuICAgIH0sXHJcbiAgICAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnOiB7XHJcbiAgICAgIG1haW46ICdpbmRleC5qcycsXHJcbiAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcclxuICAgIH0sXHJcbiAgICAnQGFuZ3VsYXIvaHR0cCc6IHtcclxuICAgICAgbWFpbjogJ2luZGV4LmpzJyxcclxuICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgfSxcclxuICAgIC8vICdAYW5ndWxhci9yb3V0ZXInOiB7XHJcbiAgICAvLyAgIG1haW46ICdpbmRleC5qcycsXHJcbiAgICAvLyAgIGRlZmF1bHRFeHRlbnNpb246ICdqcydcclxuICAgIC8vIH0sXHJcbiAgICAncnhqcyc6IHtcclxuICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJ1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=