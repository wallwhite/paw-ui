import { forwardRef, ReactElement } from 'react';
import { IconProps } from './Icon.types';
import { Icon } from './Icon';

export interface CreateIconOptions {
    viewBox?: string;
    path?: ReactElement | ReactElement[];
    definition?: string;
    displayName?: string;
    props?: IconProps;
}

export type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export const createIcon = ({
    viewBox = '0 0 24 24',
    path,
    definition,
    displayName,
    props: defaultProps = {
        fill: 'none',
    },
}: CreateIconOptions): IconComponent => {
    const IconComponent = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
            {definition ? <path fill="currentColor" d={definition} /> : path}
        </Icon>
    ));

    IconComponent.displayName = displayName;

    return IconComponent;
};
