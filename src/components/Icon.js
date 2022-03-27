import { AiFillWindows } from 'react-icons/ai'
import { FcAndroidOs } from 'react-icons/fc'
import { BiXCircle } from 'react-icons/bi'

const iconTypes = {
    '"Android"': <FcAndroidOs size={40} />,
    '"Windows"': <AiFillWindows size={40} />,
    null: <BiXCircle style={{stroke: '#fff'}} size={40} />
};
const Icon = ({ type }) => {
    return iconTypes[type]
}

export default Icon