// See https://aka.ms/new-console-template for more information

using PakReader;
using ElectronCgi.DotNet;

public class Program {
    static void Main(string[] args)
    {
        var connection = new ConnectionBuilder()
            .Build();

        // expects a request named "greeting" with a string argument and returns a string
        connection.On("getPakInfoFromPath", (string path) =>
        {
            try
            {
                var reader = new PackageReader(path);

                var result = reader.Read();

                var metaFile = result.Files.FirstOrDefault((file) => file.Name.Contains("meta.lsx"));

                if (metaFile == null)
                {
                    return null;
                }

                var packageInfo = new PackageInfo(metaFile.Name, metaFile.MakeStream());

                var base64 = Convert.ToBase64String(packageInfo.Data);

                return base64;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return null;
        });

        // wait for incoming requests
        connection.Listen();
    }
}
