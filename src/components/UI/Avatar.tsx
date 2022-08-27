import Image from "next/image"



type AvatarProps = {
    src: string | undefined
    width?: number
    height?: number
    className?: string
    onClick?: () => void
}

const Avatar = ({
    src,
    width = 20,
    height = 20,

    className = '',

    onClick
}: AvatarProps) => {


    return (
        <Image
            onClick={onClick}
            src={src ?? 'https://s3.timeweb.com/cg16553-youq/avatar.svg'}
            alt="avatar"
            width={width}
            height={height}
            className={className}
        />
    )
}

export default Avatar