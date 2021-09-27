type Props = {
  fill?: string
}

function AnalyticsIcon(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57143 8.42286V13.8629C4.56992 14.4292 4.34427 14.9719 3.94381 15.3724C3.54334 15.7728 3.00063 15.9985 2.43429 16H2.13714C1.5708 15.9985 1.02809 15.7728 0.627621 15.3724C0.227155 14.9719 0.00150824 14.4292 0 13.8629V8.42286C0.00150824 7.85652 0.227155 7.3138 0.627621 6.91334C1.02809 6.51287 1.5708 6.28722 2.13714 6.28571H2.43429C3.00063 6.28722 3.54334 6.51287 3.94381 6.91334C4.34427 7.3138 4.56992 7.85652 4.57143 8.42286ZM8 0C7.39379 0 6.81241 0.240816 6.38376 0.66947C5.9551 1.09812 5.71429 1.67951 5.71429 2.28571V13.7143C5.71429 14.3205 5.9551 14.9019 6.38376 15.3305C6.81241 15.7592 7.39379 16 8 16C8.60621 16 9.18759 15.7592 9.61624 15.3305C10.0449 14.9019 10.2857 14.3205 10.2857 13.7143V2.28571C10.2857 1.67951 10.0449 1.09812 9.61624 0.66947C9.18759 0.240816 8.60621 0 8 0ZM13.7143 3.42857C13.1081 3.42857 12.5267 3.66939 12.098 4.09804C11.6694 4.5267 11.4286 5.10808 11.4286 5.71429V13.7143C11.4286 14.3205 11.6694 14.9019 12.098 15.3305C12.5267 15.7592 13.1081 16 13.7143 16C14.3205 16 14.9019 15.7592 15.3305 15.3305C15.7592 14.9019 16 14.3205 16 13.7143V5.71429C16 5.10808 15.7592 4.5267 15.3305 4.09804C14.9019 3.66939 14.3205 3.42857 13.7143 3.42857Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  )
}

export default AnalyticsIcon