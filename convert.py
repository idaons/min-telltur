#from pyproj import Proj, transform
import pyproj
#print(transform(Proj(init='epsg:4326'), Proj(init='epsg:3857'), -0.1285907, 51.50809))  # longitude first, latitude second.


# Define the Web Mercator and WGS84 coordinate systems
web_mercator = pyproj.CRS('EPSG:3857')
wgs84 = pyproj.CRS('EPSG:4326')

# Define the point in Web Mercator coordinates
#point = (1735092.0897735602, 10473753.703991326) #hjelseng
#point = (1715668.3993602246, 10445744.263539342) #straumstien
point = (1716883.8393001189, 10447007.947887953)

# Create a transformer to convert from Web Mercator to WGS84
transformer = pyproj.Transformer.from_crs(web_mercator, wgs84)

# Convert the point to WGS84 latitude and longitude
lon, lat = transformer.transform(*point)

print(f"Latitude: {lat}, Longitude: {lon}")