import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ElementRef, ImgHTMLAttributes } from 'react'

import { cn } from '~/libs/utils'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The src attribute for the image
   */
  src: string
  /**
   * The alt text for the image
   */
  alt: string
  /**
   * Width of the image in pixels
   */
  width?: number
  /**
   * Height of the image in pixels
   */
  height?: number
  /**
   * Fill the parent container
   */
  fill?: boolean
  /**
   * The loading behavior of the image
   * @default 'lazy'
   */
  loading?: 'lazy' | 'eager'
  /**
   * The quality of the optimized image
   * @default 75
   */
  _quality?: number
  /**
   * The size of the image to be displayed
   */
  sizes?: string
  /**
   * Priority loading for important images
   */
  priority?: boolean
  /**
   * Placeholder image to show while loading
   */
  placeholder?: string
  /**
   * Object fit property
   */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  /**
   * Object position property
   */
  objectPosition?: string
  /**
   * Optional CSS class name
   */
  className?: string
}

/**
 * Advanced Image component with features similar to Next.js Image
 * Supports lazy loading, responsive sizing, and proper accessibility
 */
export const Image = forwardRef<ElementRef<'img'>, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill = false,
      loading = 'lazy',
      _quality = 75,
      sizes,
      priority = false,
      placeholder,
      objectFit,
      objectPosition,
      className,
      ...props
    },
    ref,
  ) => {
    // Handle priority loading
    const loadingProp = priority ? 'eager' : loading

    // Handle object fit and position styles
    const style: ComponentPropsWithoutRef<'img'>['style'] = {
      objectFit,
      objectPosition,
      ...props.style,
    }

    // Handle fill mode
    if (fill) {
      style.position = 'absolute'
      style.height = '100%'
      style.width = '100%'
      style.inset = '0px'
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loadingProp}
        sizes={sizes}
        className={cn(
          'max-w-full',
          placeholder && 'blur-up',
          className,
        )}
        style={style}
        {...props}
      />
    )
  },
)

Image.displayName = 'Image'
