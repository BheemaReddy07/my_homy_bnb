import { Loader2 } from "lucide-react";

export const Icons = {
    logo: (props) => (
        <svg
          width={25}
          height={25}
          viewBox="0 0 24 24"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line-color"
          {...props}
        >
          <path
            d="M14 14a4.83 4.83 0 0 1-1.41 3.41L10 20a3.54 3.54 0 0 1-2.5 1h0A3.53 3.53 0 0 1 4 17.46h0a10.5 10.5 0 0 1 1.1-4.66l4-8A3.21 3.21 0 0 1 12 3h0a3.21 3.21 0 0 1 2.89 1.79l4 8A10.5 10.5 0 0 1 20 17.46h0A3.53 3.53 0 0 1 16.46 21h0A3.54 3.54 0 0 1 14 20l-2.55-2.55A4.83 4.83 0 0 1 10 14h0a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          />
        </svg>
    ),
    google: (props) => (
      <svg
        width={800}
        height={800}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
      >
        <path
          fill="#4285F4"
          d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 0 1-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15"
        />
        <path
          fill="#34A853"
          d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.04 7.04 0 0 0 8.14 15"
        />
        <path
          fill="#FBBC04"
          d="M4.187 9.342a4.17 4.17 0 0 1 0-2.68V4.859H1.849a6.97 6.97 0 0 0 0 6.286z"
        />
        <path
          fill="#EA4335"
          d="M8.14 3.77a3.84 3.84 0 0 1 2.7 1.05l2.01-1.999a6.8 6.8 0 0 0-4.71-1.82 7.04 7.04 0 0 0-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
        />
      </svg>
    ),
    spinner : Loader2
}
