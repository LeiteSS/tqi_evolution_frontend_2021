import React from 'react';
import { LoadingSkeleton } from './styles';

interface SkeletonProps {
  width?: string,
  height?: string,
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <LoadingSkeleton width={width} height={height} />
  );
}

export default Skeleton;