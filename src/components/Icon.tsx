import clsx from "clsx"


export default function Icon ({icon, link, className}: {icon: React.ReactNode, link?: string, className?: string}) {
    return (
        <>
            {
                link ? 
                <a target="blank" className={clsx('rounded-md border-2 border-gray-400 p-2', className)} href={link}>
                    {icon}
                </a>
                :
                <div className={clsx('rounded-md border-2 border-gray-400 p-2', className)}>
                    {icon}
                </div>
            }
        </>
    )
}