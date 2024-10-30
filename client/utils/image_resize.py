#!usr/bin/env python

'''
This script is used to resize images in a directory such that the aspect ratio is preserved while the larger dimension matches the given size in pixels.
Example use: python image_resize.py /path/to/images 800 --target_directory /path/to/resized_images --append_size_to_filename
'''

import os
import sys
import argparse
from PIL import Image

def resize_image(image_file, size):
    '''
    Resize an image such that the aspect ratio is preserved while the larger dimension matches the given size in pixels.

    Parameters
    ----------
    image_file : str
        The path to the image to be resized.
    size : int
        The size in pixels to which the larger image dimension should be resized.

    Returns
    -------
    resized_image : PIL.Image.Image
        The resized image.
    '''
    image = Image.open(image_file)
    orig_width, orig_height = image.size

    if orig_width > orig_height:
        new_width = size
        new_height = int((orig_height * size) / orig_width)
    else:
        new_width = int((orig_width * size) / orig_height)
        new_height = size

    return image.resize((new_width, new_height))


def get_image_files(directory):
    image_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')) and not file.startswith('.'):
                image_files.append(os.path.join(root, file))

    return image_files


def append_size_to_filename(filename, size):
    base, ext = os.path.splitext(filename)
    return base + '_' + str(size) + ext

def change_extension(filename, new_ext = '.png'):
    base, ext = os.path.splitext(filename)
    return base + new_ext

def resize_images_in_directory(source_directory, size, target_directory = None, size_label = True, png = False):
    '''
    Resizes all images in a directory.

    Parameters
    ----------
    source_directory : str
        The directory containing the images to be resized.
    size : int
        The size in pixels to which the larger image dimension should be resized.
    target_directory : str or None, default None
        The directory to save the resized images in. If None, the images will be saved in the same directory as the source images.
    append_size_to_filename : bool, default True
        Whether to append the size of the image to the filename.
    png : bool, default False
        Whether to change the extension of the resized images to .png.

    Returns
    -------
    None
    '''
    image_files = get_image_files(source_directory)

    if target_directory:
        if not os.path.exists(target_directory):
            os.makedirs(target_directory)

    for image_file in image_files:
        resized_image = resize_image(image_file, size)
        if target_directory:
            target_file = os.path.join(target_directory, os.path.basename(image_file))
        else:
            target_file = image_file
        if size_label:
            target_file = append_size_to_filename(target_file, size)
        if png:
            target_file = change_extension(target_file)
        resized_image.save(target_file)


def main():
    parser = argparse.ArgumentParser(description='Resize images in a directory')
    parser.add_argument('source_directory', type=str, help='The directory containing the images to resize')
    parser.add_argument('size', type=int, help='The size to resize the images to')
    parser.add_argument('--target_directory', type=str, default=None, help='The directory to save the resized images in')
    parser.add_argument('--size_label', action='store_true', help='Append the size of the image to the filename')
    parser.add_argument('--png', action='store_true', help='Change the extension of the resized images to .png')
    args = parser.parse_args()

    resize_images_in_directory(args.source_directory, args.size, args.target_directory, args.size_label, args.png)


if __name__ == '__main__':
    main()



