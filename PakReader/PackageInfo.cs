namespace PakReader;

public class PackageInfo
{
    public PackageInfo(string name, Stream input)
    {
        using (MemoryStream ms = new MemoryStream())
        {
            input.CopyTo(ms);
            Data = ms.ToArray();
        }

        Name = name;
    }

    public byte[] Data { get; set; }
    public string Name { get; set; }
}
