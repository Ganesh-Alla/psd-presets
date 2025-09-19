import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '../../../public/assets/cinetone-logo.png'

const Logo = ({ratio, className}: {ratio: number, className?: string}) => {
  return (
    <Link href="/">
        <Image 
          src={LogoImage} 
          alt="logo" 
          width={ratio} 
          height={ratio}  
          className={className}  
          priority={true}
          style={{ width: 'auto', height: 'auto' }}
        />
    </Link>
  )
}

export default Logo