type Props = {
  fill?: string
}

function ListIcon(props: Props) {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.368 0H1.663C0.735558 0 0 0.784648 0 1.77399V14.226C0 15.2154 0.735558 16 1.663 16H13.336C14.2634 16 14.999 15.2154 14.999 14.226V1.77399C15.031 0.784648 14.2954 0 13.368 0ZM11.0973 12.6908H3.93364C3.58185 12.6908 3.29402 12.3838 3.29402 12.0085C3.29402 11.6333 3.58185 11.3262 3.93364 11.3262H11.0973C11.4491 11.3262 11.737 11.6333 11.737 12.0085C11.737 12.3838 11.4491 12.6908 11.0973 12.6908ZM11.0973 8.69936H3.93364C3.58185 8.69936 3.29402 8.39232 3.29402 8.01706C3.29402 7.64179 3.58185 7.33475 3.93364 7.33475H11.0973C11.4491 7.33475 11.737 7.64179 11.737 8.01706C11.737 8.39232 11.4491 8.69936 11.0973 8.69936ZM11.0973 4.67377H3.93364C3.58185 4.67377 3.29402 4.36674 3.29402 3.99147C3.29402 3.6162 3.58185 3.30917 3.93364 3.30917H11.0973C11.4491 3.30917 11.737 3.6162 11.737 3.99147C11.737 4.36674 11.4491 4.67377 11.0973 4.67377Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  )
}

export default ListIcon