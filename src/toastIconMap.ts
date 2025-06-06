export interface ToastIcon {
    color: string;
    svg?: string;
}

export type ToastType = "default" | "success" | "error" | "warning" | "info" | "promise";

export const toastIconMap: Record<ToastType, ToastIcon> = {
    promise: {
        color: "",
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .75s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"/></svg>`,
    },
    success: {
        color: "#10b27f",
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM19.207 7.79297C18.8165 7.40244 18.1835 7.40244 17.793 7.79297L10.0195 15.5654L6.72656 12.0781L6.65332 12.0068C6.26986 11.6755 5.68988 11.6826 5.31348 12.0381C4.93734 12.3935 4.8975 12.9714 5.20605 13.373L5.27344 13.4512L9.27344 17.6865L9.97949 18.4346L19.207 9.20703C19.5976 8.81651 19.5976 8.18349 19.207 7.79297Z" fill="#10B27F"/>
        </svg>`,
    },
    error: {
        color: "#f93a1d",
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM8.01562 6.60938C7.62285 6.28902 7.04385 6.31162 6.67773 6.67773C6.31162 7.04385 6.28902 7.62285 6.60938 8.01562L6.67773 8.0918L10.5859 12L6.72363 15.8623C6.3335 16.2528 6.33337 16.8859 6.72363 17.2764C7.08981 17.6424 7.66976 17.6652 8.0625 17.3447L8.13867 17.2764L12 13.4141L15.8154 17.2295L15.8916 17.2988C16.2844 17.619 16.8635 17.5955 17.2295 17.2295C17.5955 16.8635 17.619 16.2844 17.2988 15.8916L17.2295 15.8154L13.4141 12L17.2764 8.13867C17.6669 7.74818 17.6668 7.11417 17.2764 6.72363C16.9104 6.35776 16.3312 6.33527 15.9385 6.65527L15.8623 6.72363L12 10.5859L8.0918 6.67773L8.01562 6.60938Z" fill="#f93a1d"/>
            </svg>`,
    },
    info: {
        color: "#2E4BB3",
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM11 10V19H13V10H11ZM11 6V8H13V6H11Z" fill="#2E4BB3"/>
            </svg>`,
    },
    warning: {
        color: "#FBBB0C",
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM13 14V5H11V14H13ZM13 18V16H11V18H13Z" fill="#FBBB0C"/>
            </svg>`,
    },
    default: {
        color: "linear-gradient(to right,rgb(251, 248, 227), #ffc785, #ff9f68,rgb(255, 145, 77),rgb(234, 83, 96))",
        svg: "",
    },
};
