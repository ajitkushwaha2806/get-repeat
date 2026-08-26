import Link from "next/link";
import { baseStyles, sizes, variants } from "./helper/constants";

export default function Button({ text, icon, onClick, href, variant = "primary", size = "md", className = "", iconSize = 18, ...props }) {
    const variantClass = variants[variant] || variants.primary;
    const sizeClass = sizes[size] || sizes.md;
    const combinedClasses = `${baseStyles} ${variantClass} ${sizeClass} ${className}`.trim();

    const IconComponent = icon?.icon;
    const iconPosition = icon?.position || "start";

    const content = (
        <>
            {iconPosition === "start" && IconComponent && <IconComponent size={iconSize} />}
            {text && <span>{text}</span>}
            {iconPosition === "end" && IconComponent && <IconComponent size={iconSize} />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {content}
            </Link>
        );
    }
    return (
        <button onClick={onClick} className={combinedClasses} {...props}>
            {content}
        </button>
    );
}
