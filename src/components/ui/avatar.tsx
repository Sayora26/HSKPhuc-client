import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name?: string) {
  if (!name) return null;
  return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
}

interface AvatarProps extends AntAvatarProps {
  name?: string;
}

const Avatar = ({ name, style, children, ...props }: AvatarProps) => {
  return (
    <AntAvatar style={name ? { backgroundColor: stringToColor(name), ...style } : style} {...props}>
      {children ? children : stringAvatar(name)}
    </AntAvatar>
  );
};
export default Avatar;
