from PIL import Image
from collections import Counter

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def get_dominant_colors(image_path, num_colors=2):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        # Resize to speed up processing
        image = image.resize((100, 100))
        pixels = list(image.getdata())
        counts = Counter(pixels)
        common = counts.most_common(num_colors)
        return [rgb_to_hex(c[0]) for c in common]
    except Exception as e:
        print(f"Error: {e}")
        return []

image_path = "C:/Users/zbail/.gemini/antigravity/brain/b5584fbe-e663-4925-afaa-bd8f5e67bcaf/uploaded_image_1764774736389.png"
colors = get_dominant_colors(image_path)
print("Extracted Colors:", colors)
